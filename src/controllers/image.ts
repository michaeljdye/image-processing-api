import path from 'path';
import { Request, Response } from 'express';
import fs from 'fs/promises';
import { resizeImage } from '../utils/image-processing';

export const processImage = async (req: Request, res: Response) => {
  const { width = 200, height = 100, filename = 'mountain' } = req.query;
  const thumbPath = path.resolve(`src/assets/images/thumb/${String(filename)}_thumb_${String(width)}_${String(height)}.jpg`);

  try {
    const thumbImage = await fs.readFile(thumbPath);

    if (thumbImage) {
      res.sendFile(thumbPath);
    }
  } catch (errorIfThumbImageNotFound) {
    try {
      const imagePath = path.resolve(`src/assets/images/full/${String(filename)}.jpg`);
      const image = await fs.readFile(imagePath);


      const message = await resizeImage(image, +width, +height, thumbPath)

      if (message === 'Success') {
        res.contentType('image/jpg').sendFile(thumbPath)
      } else {
        res.status(500).send(message);
      }
    } catch (errorIfImageNotFound) {
      res.status(404).send('Image not found');
    }

  }

};
