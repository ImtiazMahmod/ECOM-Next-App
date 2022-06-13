import nc from "next-connect";
import Product from "../../models/Product";

import db from "../../config/db";
import data from "../../data/products";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(data.products);

  await db.disconnect();

  res.status(200).send({
    success: true,
    message: "Product seeded successfully",
  });
});

export default handler;
