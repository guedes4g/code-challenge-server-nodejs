import express from "express";
import * as ProductsController from "../controller/products.controller.js";

export const router = express.Router();

router.get("/v1/products", ProductsController.getProducts);
