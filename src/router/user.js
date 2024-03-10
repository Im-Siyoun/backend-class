import { Router } from "express";
import { UserModel } from "../schema/user.js";
import authMiddleware from "../middleware/auth.js";

const UserRouter = Router();

UserRouter.post("/", (req, res) => {
  const { body } = req;
  const result = UserModel.create({
    id: body.id,
    password: body.password,
  });
  res.json(result);
});

UserRouter.get("/", (req, res) => {
  const user = UserModel.find();
  res.send(user);
});

UserRouter.get("/:id", authMiddleware, async (req, res) => {
  const user = await UserModel.findOne({ id: req.params.id });
  if (!user) {
    return res.json({
      message: "사용자를 찾을 수 없습니다.",
    });
  }
  if (user.id !== req.decoded.id) {
    return res.json({
      message: "권한이 없습니다.",
    });
  }
  res.json({
    message: "성공적으로 조회되었습니다.",
    data: user,
  });
});

UserRouter.patch("/:id", (req, res) => {
  const id = req.params.id;
  const result = UserModel.findByIdAndUpdate(id, req.body);
  res.send(result);
});

UserRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = UserModel.findByIdAndDelete(id);
  res.send(result);
});

export default UserRouter;
