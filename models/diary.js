import query from "../database/index.js";

export function generateDate() {
  const today = new Date();

  const dd = String(today.getDate()); //get day

  const monthNumber = String(today.getMonth()); //get month number
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const mm = months[monthNumber]; //get month text

  return dd + " " + mm; //01 Jan
}

export async function inputNewDiaryEntry(data) {
  const now = new Date();
  const newEntry = await query(
    `INSERT INTO mindset_diary (date, content, reflections, emotion ) VALUES ($1,$2,$3,$4) RETURNING *;`,
    [now, data.content, data.reflections, data.emotion]
  );
  return newEntry.rows;
}
