import express, { response } from 'express';
import cors from 'cors';
import router from './routes';
import { dbConnect } from './services/database';

import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

dbConnect();

app.listen(8888, () => {
  console.log('Server is running on port http://localhost:8888');
});
