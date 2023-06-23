import sharp from 'sharp';

export default async (
  image: Buffer,
  height: number,
  width: number,
  thumbPath: string,
): Promise<string> => {
  try {
    await sharp(image).resize(height, width).toFile(thumbPath);
    return 'Success';
  } catch (error) {
    return 'Error resizing image';
  }
};
