import request from 'supertest';
import app from '../../index';

describe('Image Resize API', () => {
  describe('GET /api/resize', () => {
    it('should return the resized image if it exists', async () => {
      const response = await request(app)
        .get('/api/resize')
        .query({ width: 200, height: 100, filename: 'mountain' });

      expect(response.status).toBe(200);
      expect(response.type).toBe('image/jpeg');
    });

    it('should return an error if the resized image does not exist', async () => {
      const response = await request(app)
        .get('/api/resize')
        .query({ width: 300, height: 150, filename: '' });

      expect(response.status).toBe(500);
      expect(response.text).toBe('Image not found');
    });

    it('should return an error if the original image does not exist', async () => {
      const response = await request(app)
        .get('/api/resize')
        .query({ width: 200, height: 100, filename: 'nonexistent' });

      expect(response.status).toBe(404);
      expect(response.text).toBe('Image not found');
    });
  });
});
