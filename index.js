import express from "express";
import { expressCfg } from "./config.js";
import cors from "cors";
import {
  generateDate,
  getAllEntries,
  inputNewDiaryEntry,
} from "./models/diary.js";
const app = express();

const PORT = expressCfg.PORT || 3002;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    payload: "This is the default Express API route",
  });
});

app.get("/diary", async (req, res) => {
  const entries = await getAllEntries();
  res.json({
    success: true,
    payload: entries,
  });
});

app.post("/diary", async (req, res) => {
  //expecting req.query http://localhost:3011/diary?content=text&reflection=text&emotion=int
  //responding with reformatted request for now
  //const newDiaryEntry = await inputNewDiaryEntry(req.query);

  res.json({
    success: true,
    payload: "Teastasdasd",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT}`);
  console.log("expressCfg: ", expressCfg);
});
