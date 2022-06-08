import { findAll } from "../repository/products.repository.js";

export const getProducts = () => {
  return findAll();
};
