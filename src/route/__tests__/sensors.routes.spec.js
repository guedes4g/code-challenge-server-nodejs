import request from "supertest";
import { createApp } from "../../app.js";
import * as SensorsService from "../../service/sensors.service.js";

describe("sensors routes", () => {
  let app;
  beforeEach(() => {
    app = createApp();
  });

  describe("[GET] /temperature", () => {
    it("should fetch temperature data", (done) => {
      jest.spyOn(SensorsService, "getTemperature").mockResolvedValue({
        id: "1",
        temperature: 2,
      });
      request(app)
        .get("/temperature/1")
        .expect(200)
        .then((response) => {
          expect(response.body).toStrictEqual({
            id: "1",
            temperature: 2,
          });
        })
        .finally(done);
    });
  });

  describe("[GET] /v1/sensors/temperature", () => {
    it("should fetch temperature data", (done) => {
      jest.spyOn(SensorsService, "getTemperature").mockResolvedValue({
        id: "1",
        temperature: 2,
      });
      request(app)
        .get("/v1/sensors/temperature?ids[]=1")
        .expect(200)
        .then((response) => {
          expect(response.body).toStrictEqual([
            {
              id: "1",
              temperature: 2,
            },
          ]);
        })
        .finally(done);
    });

    it("should return an error on missing ids", (done) => {
      request(app)
        .get("/v1/sensors/temperature")
        .expect(400)
        .then((response) => {
          expect(response.body).toStrictEqual({
            errors: [{ location: "query", msg: "Missing ids", param: "ids" }],
          });
        })
        .finally(done);
    });
  });
});
