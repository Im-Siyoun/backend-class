import { Router } from "express";
import { PostModel } from "../schema/post.js";

const PostRouter = Router();

PostRouter.post("/", (req, res) => {
  const { body } = req;
  const result = PostModel.create({
    title: body.title,
    content: body.content,
    author: body.author,
  });
  res.json(result);
});

PostRouter.get("/", (req, res) => {
  const post = PostModel.find();
  res.send(post);
});

PostRouter.patch("/:id", (req, res) => {
  const id = req.params.id;
  const result = PostModel.findByIdAndUpdate(id, req.body);
  res.send(result);
});

PostRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = PostModel.findByIdAndDelete(id);
  res.send(result);
});

export default PostRouter;
