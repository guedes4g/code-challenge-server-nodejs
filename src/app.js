import express from "express";
import cors from "cors";
import { router as sensorRounter } from "./route/sensors.routes.js";
import { router as productsRouter } from "./route/products.routes.js";

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(sensorRounter);
  app.use(productsRouter);
  return app;
};
