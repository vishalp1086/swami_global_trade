const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
subTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    images: [
      {
        url: String,
        public_id: String,
      },
    ],

    pdf: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);