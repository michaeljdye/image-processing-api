import { Request, Response } from 'express';
import sharp from 'sharp';

export const resizeImage = async (req: Request, res: Response) => {
  const { width, height, filename } = req.query;

  res.send(`width: ${width}, height: ${height}, filename: ${filename}`)


  // sharp(req.params.image)
  //   .resize(200, 300, {
  //     kernel: sharp.kernel.nearest,
  //     fit: 'contain',
  //     position: 'right top',
  //     background: { r: 255, g: 255, b: 255, alpha: 0.5 },
  //   })
  //   .toFile('output.png')
  //   .then(() => {
  //     // output.png is a 200 pixels wide and 300 pixels high image
  //     // containing a nearest-neighbour scaled version
  //     // contained within the north-east corner of a semi-transparent white canvas
  //   });
};
