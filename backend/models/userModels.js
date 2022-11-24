import pkg from "../db/index.cjs";
const { query } = pkg;

export async function getUsers() {
  const result = await query("SELECT * FROM users;");
  const usersArray = result.rows;
  console.log(`this is the users list ${usersArray}`);
  return usersArray;
}
export async function createUser(newUser) {
  const result = await query(
    "INSERT INTO users(user_firstname, user_surname) VALUES ($1, $2) RETURNING *;",
    [newUser.user_firstname, newUser.user_surname]
  );
  const user = result.rows[0].user_id;
  console.log(user, `This is the createuser function`);
  return user;
}
// export async function getByWeek(id) {

//   const result = await query(`SELECT * FROM flashcards WHERE card_id = ${id}`);
//   console.log(result.rows[0]);
//   return result.rows[0];
// }
