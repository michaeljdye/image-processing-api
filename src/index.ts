import express from 'express';

const app = express();

import image from './routes/images';

app.use('/api/images', image);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
