import express from "express";
import { expressCfg } from "./config.js";

const app = express();

const PORT = 3010 || expressCfg.PORT;

app.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT}`);
  console.log("expressCfg: ", expressCfg);
});
