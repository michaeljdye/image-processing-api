import path from 'path';
import { Request, Response } from 'express';
import sharp from 'sharp';
import { promises as fs } from 'fs';

export const resizeImage = async (req: Request, res: Response) => {
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

      sharp(image)
        .resize(+height, +width)
        .toFile(thumbPath)
        .then(() => {          
          res.setHeader('Content-Type', 'image/png');
          res.sendFile(thumbPath);
        });
      
    } catch (errorIfImageNotFound) {
      res.status(404).send('Image not found');
    }

  }

};
