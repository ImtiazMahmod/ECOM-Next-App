import nc from "next-connect";
import {
  deleteSingleProduct,
  getSingleProduct,
  updateSingleProduct,
} from "../../../controllers/productsController";

const handler = nc();

handler
  .get(getSingleProduct)
  .put(updateSingleProduct)
  .delete(deleteSingleProduct);

export default handler;
