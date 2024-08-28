import express from "express";
import cors from "cors";
import { getEnv } from "./util";

const app = express();
const port = getEnv("SERVER_PORT");

app.use(express.json());
// cors
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello, world!",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
