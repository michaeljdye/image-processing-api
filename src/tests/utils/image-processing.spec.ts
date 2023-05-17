import path from 'path';
import { resizeImage } from '../../utils/image-processing';
import fs from 'fs/promises'

describe('resizeImage', () => {
    it('should resize an image', async () => {
        const imagePath = path.resolve(`src/assets/images/full/mountain.jpg`);
        const image = await fs.readFile(imagePath);
        const height = 200;
        const width = 100;
        const thumbPath = path.resolve(`src/assets/images/thumb/mountain_thumb_${String(width)}_${String(height)}.jpg`);
        const result = await resizeImage(image, height, width, thumbPath);
        expect(result).toEqual('Success');
    })})