import { Router } from "express";

const UserRouter = Router();

UserRouter.post('/', (req, res) => {
  const { body } = req;
  console.log(body.id, body.password);
  res.json({
    id: body.id,
    password: body.password,
  });
});
UserRouter.get('/', (req, res) => {
  res.send('GET 요청을 받았습니다.');
});
UserRouter.patch('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`${id}의 수정 요청을 받았습니다.`);
});
UserRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`${id}의 삭제 요청을 받았습니다.`);
});

export default UserRouter;