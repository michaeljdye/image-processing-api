import path from 'path';
import { Request, Response } from 'express';
import sharp from 'sharp';
import { promises as fs } from 'fs';

export const resizeImage = async (req: Request, res: Response) => {
  const { width = 200, height = 100, filename = 'mountain' } = req.query;

  try {
    const thumbImage = await fs.readFile(`src/assets/images/thumb/${String(filename)}_thumb_${String(width)}_${String(height)}.jpg`);

    if (thumbImage) {
      const imagePath = path.resolve(`src/assets/images/thumb/${String(filename)}_${String(width)}}_${String(height)}`);
      res.sendFile(imagePath);
     return
    }
    
  } catch (errorIfThumbImageNotFound) {
    try {
      const image = await fs.readFile(`src/assets/images/full/${String(filename)}.jpg`);

      sharp(image)
        .resize(+height, +width)
        .toFile(`src/assets/images/thumb/${String(filename)}_thumb_${String(width)}_${String(height)}.jpg`)
        .then(() => {
          const imagePath = path.resolve(`src/assets/images/thumb/${String(filename)}_${String(width)}}_${String(height)}`);
          
          res.setHeader('Content-Type', 'image/png');
          res.sendFile(imagePath);
        });
      
    } catch (errorIfImageNotFound) {
      res.status(404).send('Image not found');
    }

  }

};
