import * as SensorsService from "../service/sensors.service";

export const getTemperature = async (req, res) => {
  res.json(await SensorsService.getTemperature(req.params.id));
};

export const getTemperatures = async (req, res) => {
  const temperatures = req.query.ids.map((id) =>
    SensorsService.getTemperature(id)
  );
  res.json(await Promise.all(temperatures));
};
