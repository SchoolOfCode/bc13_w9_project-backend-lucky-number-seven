import pkg from "../db/index.cjs";
import { createUser2 } from "./sqlModels.js";
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
export async function createLink(newlink) {
  const user = await query(
    `SELECT user_id from users where user_firstname = $1 and user_surname = $2`,
    [newlink.user_firstname, newlink.user_surname]
  );
  if (user.rows[0]) {
    return user.rows[0].user_id;
  } else {
    const newUser = createUser2(newlink.user_firstname, newlink.user_surname);
    console.log(newUser);
  }
  //     const result = await query(
  //       "INSERT INTO links (week, topic, links, user_id) VALUES ($1, $2, $3, $4) RETURNING *;",
  //       [newlink.week, newlink.topic, newlink.link, user_id]
  //     );
  //     const user = result.rows[0];
  //     console.log(user, `This is the createlinkfunction`);
  //     return result;
  //   }
}
