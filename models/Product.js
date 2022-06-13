import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter a product Title"],
      trim: true,
      maxlength: [100, "Title must be at least 100 characters"],
    },
    category: {
      type: String,
      require: [true, "Please Enter a category"],
      // enum: {
      //   values: ["shirt, Pant, fan "],
      //   message: "Please select correct category for product",
      // },
    },
    price: {
      type: Number,
      required: [true, , "Please Enter a price"],
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please Enter a description"],
    },
    // image: [
    //   {
    //     public_id: {
    //       type: String,
    //       required: true,
    //     },
    //     url: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    image: {
      type: String,
      required: true,
    },

    // reviews: [
    //   {
    //     user: {
    //       type: mongoose.Schema.ObjectId,
    //       ref: "User",
    //       required: true,
    //     },
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     rating: {
    //       type: Number,
    //       required: true,
    //     },
    //     comment: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
    },
    rating: {
      rate: {
        type: Number,
        required: [true, "rate is required"],
      },
      count: {
        type: Number,
        required: [true, "count is required"],
      },
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },

  { timeStamp: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
