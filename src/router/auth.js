import { Router } from "express";
import { UserModel } from "../schema/user";
import jwt from "jsonwebtoken";

const AuthRouter = Router();

AuthRouter.post("/login", (req, res) => {
  const key = "1234qwer";
  const { id, password } = req.body;
  const user = UserModel.find({ id: id });
  if (!user) {
    res.json({ message: "사용자를 찾을 수 없습니다!" });
  } else if (user.password !== password) {
    res.json({ message: "비밀번호가 틀립니다!" });
  }
  const token = jwt.sign(
    {
      type: "JWT",
      id: id,
    },
    key,
    {
      expiresIn: "15m",
      issuer: "Arom",
    }
  );

  res.json({
    message: "성공적으로 로그인 되었습니다.",
    token: token,
  });
});
