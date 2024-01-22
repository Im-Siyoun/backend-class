import { Router } from "express";
import { ExchangeModel } from "../schema/openapi.js";

const openapiRouter = Router();

openapiRouter.get("/exchange", async (req, res) => {
  const data = await ExchangeModel.find();

  res.send(data);
});

export default openapiRouter;
