import express from 'express';
import UserRouter from './router/user.js';

const app = express();

app.use(UserRouter);

app.listen(3000, () => {
  console.log('서버가 실행되었습니다.');
});