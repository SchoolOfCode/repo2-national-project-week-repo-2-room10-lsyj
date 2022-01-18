import express from "express";
import { expressCfg } from "./config.js";
import { generateDate } from "./models/diary.js";

const app = express();

const PORT = expressCfg.PORT || 3010;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    payload: "This is the default Express API route",
  });
});

app.post("/diary", (req, res) => {
  //expecting req.query http://localhost:3011/diary?content=text&reflection=text&emotion=int
  //responding with reformatted request for now
  res.json({
    success: true,
    payload: { ...req.query, date: generateDate() },
  });
});

app.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT}`);
  console.log("expressCfg: ", expressCfg);
});
