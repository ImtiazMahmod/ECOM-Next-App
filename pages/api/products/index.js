import nc from "next-connect";
import {
  allProducts,
  createProduct,
} from "../../../controllers/productsController";
import db from "../../../config/db";

const handler = nc();
db.connect();

handler.get(allProducts).post(createProduct);

db.disconnect();
export default handler;
