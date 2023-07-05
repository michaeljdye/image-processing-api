import path from 'path';
import { Request, Response } from 'express';
import fs from 'fs/promises';
import resize from '../utils/image-processing';

export default async (req: Request, res: Response) => {
  const { width, height, filename } = req.query;

  if (!filename || typeof filename !== 'string') {
    res.status(500).send('Please provide a valid filename.');
    return;
  }

  if (
    !width ||
    !height ||
    Number.isNaN(Number(width)) ||
    Number.isNaN(Number(height))
  ) {
    res.status(500).send('Please provide valid width and height.');
    return;
  }

  const thumbPath = path.resolve(
    `src/assets/images/thumb/${String(filename)}_thumb_${String(
      width,
    )}_${String(height)}.jpg`,
  );

  try {
    const thumbImage = await fs.readFile(thumbPath);

    if (thumbImage) {
      res.sendFile(thumbPath);
    }
  } catch (errorIfThumbImageNotFound) {
    try {
      const imagePath = path.resolve(
        `src/assets/images/full/${String(filename)}.jpg`,
      );
      const image = await fs.readFile(imagePath);

      const message = await resize(image, +width, +height, thumbPath);

      if (message === 'Success') {
        res.contentType('image/jpg').sendFile(thumbPath);
      } else {
        res.status(500).send(message);
      }
    } catch (errorIfImageNotFound) {
      res.status(404).send('File not found.');
    }
  }
};
