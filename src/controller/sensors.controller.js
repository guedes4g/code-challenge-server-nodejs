import * as SensorsService from "../service/sensors.service";

export const getTemperature = async (req, res) => {
  res.json(await SensorsService.getTemperature(req.params.id));
};