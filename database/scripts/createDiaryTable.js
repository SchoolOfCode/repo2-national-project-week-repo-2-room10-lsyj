import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS mindset_diary (id SERIAL PRIMARY KEY, date DATETIME, content TEXT, reflections TEXT, emotion INT)`;

async function createMindsetTable() {
  const res = await query(sqlString);
  console.log("created minset diary table", res);
}

createMindsetTable();
