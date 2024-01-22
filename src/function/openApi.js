import fetch from "node-fetch";
import { ExchangeModel } from "../schema/openapi.js";
import crypto from "crypto";
import https from "https";
import dotenv from "dotenv";

const ExchangeFunction = async () => {
  dotenv.config();
  const authkey = process.env.EXCHANGE_AUTH_KEY;
  const data = "AP01";
  const result = await fetch(
    `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=20240122&data=${data}`,
    {
      rejectUnauthorized: false,
      agent: new https.Agent({
        secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
      }),
    },
    (error) => {
      console.log(error);
      throw error;
    }
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
  console.log("데이터 가져오기 성공");
};

export default ExchangeFunction;
