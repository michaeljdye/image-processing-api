import request from 'supertest';
import app from '../../index';

describe('Image Resize API', () => {
  describe('GET /api/resize', () => {
    it('should return the resized image if it exists', async () => {
      const response = await request(app)
        .get('/api/resize')
        .query({ width: 200, height: 100, filename: 'mountain' });

      expect(response.status).toBe(200);
    });

    it('should return an error if filename not provided', async () => {
      const response = await request(app)
        .get('/api/resize')
        .query({ width: 300, height: 150 });

      expect(response.status).toBe(500);
      expect(response.text).toBe('Please provide a valid filename.');
    });

    it('should return an error if width and height not provided', async () => {
      const response = await request(app)
        .get('/api/resize')
        .query({ filename: 'mountain' });
      expect(response.status).toBe(500);
      expect(response.text).toBe('Please provide valid width and height.');
    });

    it('should return an error if width and height are not numbers', async () => {
      const response = await request(app)
        .get('/api/resize')
        .query({ width: 'abc', height: 'def', filename: 'mountain' });
      expect(response.status).toBe(500);
      expect(response.text).toBe('Please provide valid width and height.');
    });

    it('should return an error if the image does not exist', async () => {
      const response = await request(app)
        .get('/api/resize')
        .query({ width: 200, height: 100, filename: 'nonexistent' });

      expect(response.status).toBe(404);
      expect(response.text).toBe('File not found.');
    });
  });
});
