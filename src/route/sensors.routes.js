import express from "express";
import * as SensorsController from "../controller/sensors.controller";

export const router = express.Router();

router.get(
  "/temperature/:id",
  SensorsController.getTemperature
);
