// Import necessary dependencies and modules
const request = require('supertest');
const app = require('../../index'); // Assuming your app is defined in a separate file called 'app.js'

describe('Image Processing API', () => {
  describe('GET /image', () => {
    it('should return the resized image if it exists', async () => {
      const response = await request(app)
        .get('/image')
        .query({ width: 200, height: 100, filename: 'mountain' });

      expect(response.status).toBe(200);
      expect(response.type).toBe('image/jpeg');
    });

    it('should return an error if the resized image does not exist', async () => {
      const response = await request(app)
        .get('/image')
        .query({ width: 300, height: 150, filename: 'mountain' });

      expect(response.status).toBe(500);
      expect(response.text).toBe(
        'Error message indicating the image was not resized',
      );
    });

    it('should return an error if the original image does not exist', async () => {
      const response = await request(app)
        .get('/image')
        .query({ width: 200, height: 100, filename: 'nonexistent' });

      expect(response.status).toBe(404);
      expect(response.text).toBe('Image not found');
    });
  });
});
