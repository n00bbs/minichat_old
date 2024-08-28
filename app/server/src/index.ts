import express from "express";
import { getEnv } from "./util";

const app = express();
const port = getEnv("SERVER_PORT");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
