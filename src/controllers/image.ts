import { Request, Response } from 'express';
import sharp from 'sharp';
import { promises as fs } from 'fs';

export const resizeImage = async (req: Request, res: Response) => {
  const { width = 200, height = 100, filename = 'mountain.jpg' } = req.query;


  const image = await fs.readFile(`src/images/full/${String(filename)}`);

  sharp(image)
    .resize(+height, +width, {
      kernel: sharp.kernel.nearest,
      fit: 'contain',
      position: 'right top',
      background: { r: 255, g: 255, b: 255, alpha: 0.5 },
    })
    .toFile(`src/images/thumb/${String(filename)}`)
    .then(() => {
      res.send('image resized')
    });
};
