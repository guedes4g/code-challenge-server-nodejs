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
        .finally(() => done());
    });
  });
});
