import { createApp } from "./src/app";

const port = 8081;
const app = createApp();

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
