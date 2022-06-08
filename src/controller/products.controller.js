import * as ProductsController from "../service/products.service.js";

export const getProducts = async (_req, res) => {
  res.json(await ProductsController.getProducts());
};
