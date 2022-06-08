import request from "supertest";
import { createApp } from "../../app.js";
import * as ProductsRepository from "../../repository/products.repository.js";

describe("products routes", () => {
  let app;
  beforeEach(() => {
    app = createApp();
  });

  describe("[GET] /v1/products", () => {
    it("should retrive the products from the database", (done) => {
      jest.spyOn(ProductsRepository, "findAll").mockResolvedValue([
        {
          id: "1",
          name: "Pilsner1",
          minimumTemperature: 4,
          maximumTemperature: 6,
        },
      ]);
      request(app)
        .get("/v1/products")
        .expect(200)
        .then((response) => {
          expect(response.body).toStrictEqual([
            {
              id: "1",
              name: "Pilsner1",
              minimumTemperature: 4,
              maximumTemperature: 6,
            },
          ]);
          done();
        });
    });
  });
});
