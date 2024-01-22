import mongoose from "mongoose";

const ExchangeSchema = new mongoose.Schema(
  {
    deal: { type: Number, require: true },
    unit: { type: String, require: true },
    region: { type: String, require: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const ExchangeModel = mongoose.model("Exchange", ExchangeSchema);

export { ExchangeSchema, ExchangeModel };
