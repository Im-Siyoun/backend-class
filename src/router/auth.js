import { Router } from "express";
import { UserModel } from "../schema/user.js";
import jwt from "jsonwebtoken";

const AuthRouter = Router();

AuthRouter.post("/login", async (req, res) => {
  const key = "1234qwer";
  const { id, password } = req.body;
  const user = await UserModel.findOne({ id: id });
  console.log(user);
  if (!user) {
    return res.json({ message: "사용자를 찾을 수 없습니다!" });
  } else if (user.password !== password) {
    return res.json({ message: "비밀번호가 틀립니다!" });
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

  return res.json({
    message: "성공적으로 로그인 되었습니다.",
    token: token,
  });
});

export default AuthRouter;
