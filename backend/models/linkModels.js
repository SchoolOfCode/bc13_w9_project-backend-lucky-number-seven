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

export async function getByTopics(topic) {
  console.log(topic);
  const result = await query(`SELECT * FROM links WHERE topic = $1`, [topic]);
  const topicsArray = result.rows;
  // console.log(`this is the list by ${topicsArray}`);
  return topicsArray;
}
export async function createLink(newLink) {
  const user_id = await query(
    `SELECT * from users where user_firstname = $1 and user_surname = $2`,
    [newlink.user_firstname, newlink.user_surname]
  );
  const result = await query(
    "INSERT INTO links (week, topic, links, user_id) VALUES ($1, $2, $3, $4) RETURNING *;",
    [newlink.week, newlink.topic, newlink.link, user_id]
  );
  const user = result.rows[0];
  console.log(user, `This is the createlinkfunction`);
  return user;
}
