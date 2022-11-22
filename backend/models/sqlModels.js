import pkg from '../db/index.cjs';
const { query } = pkg;

export async function getFlashcard() {
  const result = await query("SELECT * FROM flashcards;");
  const flashcardsArray = result.rows;
  console.log(`this is the card ${flashcardsArray}`)
  return flashcardsArray;
}

export async function getCardByID(id) {

  const result = await query(`SELECT * FROM flashcards WHERE card_id = ${id}`);
  console.log(result.rows[0]);
  return result.rows[0];
}

export async function getFlashcardByTitle(searchTerm) {

  const result = await query(`SELECT * FROM flashcards WHERE title ILIKE $1`, [
    `%${searchTerm}%`,
  ]);
  console.log(result.rows);
  return result.rows;
}

export async function createFlashcard(card) {

  const result = await query(
    `INSERT INTO flashcards (card_id, title, comment, explanation, other, image) VALUES ('${card.card_id}', '${card.title}', '${card.comment}', '${card.explanation}', '${card.other}', '${card.image}')`
  );

  console.log(card);
  return card;
}

export async function updateFlashCard(id, updates) {

  const result = await query(
    `UPDATE flashcards SET card_id = '${updates.card_id}', title = '${updates.title}', comment = '${updates.comment}', explanation = '${updates.explanation}', other = '${updates.other}', image= '${updates.image}' WHERE card_id = ${id}`
  );
  console.log(result.rows[0]);
  return result.rows[0];
}

export async function deleteFlashcardByID(id) {

  const result = await query(`DELETE FROM flashcards WHERE card_id = ${id}`);
  console.log(result.rows[0]);
  return result.rows[0];
}
