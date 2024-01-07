import { Router } from "express";

const UserRouter = Router();

UserRouter.post('/', (req, res) => {
  res.send('POST 요청을 받았습니다.');
});
UserRouter.get('/', (req, res) => {
  res.send('GET 요청을 받았습니다.');
});
UserRouter.patch('/', (req, res) => {
  res.send('PATCH 요청을 받았습니다.');
});
UserRouter.delete('/', (req, res) => {
  res.send('DELETE 요청을 받았습니다.');
});

export default UserRouter;