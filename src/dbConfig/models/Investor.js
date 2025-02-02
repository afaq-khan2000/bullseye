const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const investorSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    investmentAmount: {
      type: Number,
      required: false,
      trim: true,
    },
    returnExpectation: {
      type: Number,
      required: false,
      trim: true,
    },
    investmentType: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Investor = mongoose.model("Investor", investorSchema);

module.exports = Investor;
