import fetch from "node-fetch";
import { ExchangeModel } from "../schema/openapi.js";
import crypto from 'crypto';
import https from 'https';


const ExchangeFunction = async () => {
  const authkey = "kKAgmT6sXasOHpBFhqG09VqEX0NMi6ij";
  const data = "AP01";
  const result = await fetch(
    `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=20240122&data=${data}`,
    {
      agent: new https.Agent({
        connect: {
          rejectUnauthorized: false,
          secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT
        }
      })
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
