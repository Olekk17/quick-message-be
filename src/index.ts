import express from 'express';
import { router } from './routes';
import cors from 'cors';
import { getDb } from './db/getDb';

const main = () => {
  const app = express();
  const port = 3000;
  getDb();
  app.use(cors());
  app.use(express.json());
  app.use(router);

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

main();