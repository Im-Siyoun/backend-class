import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const key = "1234qwer";
  const token = req.headers.authorization;
  console.log(token);
  const tokenDecoded = jwt.verify(token, key);
  req.decoded = tokenDecoded;
  return next();
};

export default authMiddleware;