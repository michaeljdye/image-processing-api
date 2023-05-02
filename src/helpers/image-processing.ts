import sharp from 'sharp';

export const resizeImage = (image: Buffer, height: number, width: number, thumbPath: string): Promise<string> => {
    return sharp(image)
    .resize(height, width)
    .toFile(thumbPath)
    .then(() => "Success").catch(() => "Error resizing image");
}