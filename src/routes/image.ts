import express from 'express';
import { resizeImage } from '../controllers/image';

const router = express.Router();

router.get('/', resizeImage);

export default router;
