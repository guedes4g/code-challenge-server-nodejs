export const errorHandlerMiddleware = async (error, _req, res, next) => {
  if (!res.headersSent) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  next(error);
};
