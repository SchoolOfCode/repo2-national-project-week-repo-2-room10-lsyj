import express from "express";
import { expressCfg } from "./config.js";

const app = express();

const PORT = expressCfg.PORT || 3010;

app.get("/", (req, res) => {
  res.json({
    success: true,
    payload: "This is the default Express API route",
  });
});

app.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT}`);
  console.log("expressCfg: ", expressCfg);
});
