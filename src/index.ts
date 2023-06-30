import express from 'express';

import resize from './routes/resize';

const app = express();

app.use('/api/resize', resize);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});

export default app;
