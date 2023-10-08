import express from 'express';
const app = express();
const router = express.Router();
import usersRouter from './routes/users.routes';

app.use(express.json());
app.use('/user', usersRouter);

app.listen(3001, () => {
  console.log('server is running');
});
