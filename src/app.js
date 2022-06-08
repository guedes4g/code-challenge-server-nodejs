import express from "express";
import cors from "cors";
import { router as sensosrRounter } from "./route/sensors.routes.js";

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(sensosrRounter);
  return app;
};
