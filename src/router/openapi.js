import { Router } from "express";
import fetch from "node-fetch";

const openapiRouter = Router();

openapiRouter.get("/exchange", async (req, res) => {
  const authkey = "kKAgmT6sXasOHpBFhqG09VqEX0NMi6ij";
  const data = "AP01";
  const result = await fetch(
    `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=20240122&data=${data}`,
    (error) => {
      console.log(error);
      throw error;
    }
  );
  const responsedData = await result.json();
  res.send(responsedData);
});

export default openapiRouter;
