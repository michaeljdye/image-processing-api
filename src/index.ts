import express from 'express';

const app = express();

import image from './routes/image';

app.use('/api/image', image);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
