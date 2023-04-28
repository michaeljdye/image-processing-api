import path from 'path';
import { Request, Response } from 'express';
import sharp from 'sharp';
import { promises as fs } from 'fs';

export const resizeImage = async (req: Request, res: Response) => {
  const { width = 200, height = 100, filename = 'mountain.jpg' } = req.query;


  const image = await fs.readFile(`src/public/images/full/${String(filename)}`);

  sharp(image)
    .resize(+height, +width)
    .toFile(`src/public/images/thumb/${String(filename)}`)
    .then(() => {
      const imagePath = path.resolve(`src/public/images/thumb/${String(filename)}`);
      
      res.setHeader('Content-Type', 'image/png');
      res.sendFile(imagePath);
    });
};
