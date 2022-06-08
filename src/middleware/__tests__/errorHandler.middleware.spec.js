import { errorHandlerMiddleware } from "../errorHandler.middleware";

describe("errorHandlerMiddleware", () => {
  it("should reply to the error with status 500", () => {
    const res = { headersSent: false };
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    errorHandlerMiddleware({}, {}, res, jest.fn());
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Internal Server Error" });
  });
});
