import path from 'path';
import fs from 'fs/promises';
import resizeImage from '../../utils/image-processing';

describe('Image Processing Utils', () => {
  it('should resize an image', async () => {
    const imagePath = path.resolve(
      path.join('assets/images/full', 'mountain.jpg'),
    );
    const image = await fs.readFile(imagePath);
    const height = 200;
    const width = 100;
    const thumbPath = path.join(
      'assets/images/thumb',
      `mountain_thumb_${String(width)}_${String(height)}.jpg`,
    );
    const result = await resizeImage(image, height, width, thumbPath);

    expect(result).toEqual('Success');
  });

  it('should return correct error when unable to resize image', async () => {
    const imagePath = path.resolve(
      path.join('assets/images/full', 'mountain.jpg'),
    );
    const image = await fs.readFile(imagePath);
    const height = 200;
    const width = 100;
    const thumbPath = '';
    const result = await resizeImage(image, height, width, thumbPath);

    expect(result).toEqual('Error resizing image');
  });
});
