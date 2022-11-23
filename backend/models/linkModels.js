import pkg from "../db/index.cjs";
const { query } = pkg;

export async function getByWeek(week) {
  const result = await query(`SELECT * FROM links WHERE week = $1`, [week]);
  const weeksArray = result.rows;
  console.log(`this is the list  by ${weeksArray}`);
  return weeksArray;
}
export async function getLinks() {
  const result = await query(`SELECT * FROM links;`);
  const linksArray = result.rows;
  console.log(`this is the list  by ${linksArray}`);
  return linksArray;
}