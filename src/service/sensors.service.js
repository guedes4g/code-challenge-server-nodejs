import fetch from "node-fetch";

// TODO: Cache request
export const getTemperature = (id) => {
  return fetch(
    `https://temperature-sensor-service.herokuapp.com/sensor/${id}`
  ).then((response) => response.json());
};
