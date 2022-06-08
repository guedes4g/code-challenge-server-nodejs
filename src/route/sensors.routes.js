import express from "express";
import { query, param } from "express-validator";
import { validationHandler } from "../middleware/validatiorHandler.middleware.js";
import * as SensorsController from "../controller/sensors.controller";

export const router = express.Router();

router.get(
  "/v1/sensors/temperature",
  query("ids").exists().withMessage("Missing ids").toArray(),
  validationHandler,
  SensorsController.getTemperatures
);

/**
 * @deprecated
 * It would be best to rename this route that fetches a single resource to
 * /sensors/:id/temperature
 * or
 * /products/:id/temperature
 */
router.get(
  "/temperature/:id",
  param("id").isString(),
  validationHandler,
  SensorsController.getTemperature
);
