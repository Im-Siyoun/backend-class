import { Router } from "express";
import { UserModel } from "../schema/user.js";

const UserRouter = Router();

UserRouter.post("/", (req, res) => {
  const { body } = req;
  const result = UserModel.create({
    id: body.id,
    password: body.password,
  })
  res.json(result);
});

UserRouter.get("/", (req, res) => {
  const user = UserModel.find();
  res.send(user);
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
