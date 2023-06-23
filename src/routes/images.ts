import express from 'express';
import { processImage } from '../controllers/image';

const router = express.Router();

router.get('/', processImage);

export default router;
