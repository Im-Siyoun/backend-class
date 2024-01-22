import { Router } from "express";
import fetch from "node-fetch";
import { ExchangeModel } from "../schema/openapi.js";

const openapiRouter = Router();

openapiRouter.get("/exchange", async (req, res) => {
  const authkey = "kKAgmT6sXasOHpBFhqG09VqEX0NMi6ij";
  const data = "AP01";
  const result = await fetch(
    `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=20240122&data=${data}`,
    {
      rejectUnauthorized: false,
    },
    (error) => {
      console.log(error);
      throw error;
    },
  );
  const responsedData = await result.json();
  await ExchangeModel.deleteMany();
  responsedData.forEach(async (item) => {
    await ExchangeModel.create({
      deal: parseFloat(item.deal_bas_r),
      unit: item.cur_unit,
      region: item.cur_nm,
    });
  });
  res.send(responsedData);
});

export default openapiRouter;
