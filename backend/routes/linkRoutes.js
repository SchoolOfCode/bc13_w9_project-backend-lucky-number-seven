import express from "express";
const router = express.Router();
// import { getUsers, getFlashcardByTitle, getCardByID, createFlashcard, updateFlashCard, deleteFlashcardByID } from "../models/flashcardsModels.js"
import {
  getByTopics,
  getByWeek,
  getLinks,
  createLink,
  // getLinkByUserID,
} from "../models/linkModels.js";
router.get("/", async function (req, res) {
  if (req.query.week !== undefined) {
    const result = await getByWeek(req.query.week);
    console.log(`this is from week ${result}`);
    return res.status(200).json({ success: true, payload: result });
  } else if (req.query.topic !== undefined) {
    const result = await getByTopics(req.query.topic);
    console.log(`this is from week ${result}`);
    return res.status(200).json({ success: true, payload: result });
  } else if (req.query.links !== undefined) {
    const response = await getLinks();
    console.log(`this is response ${response.payload}`);
    res.status(201).json({ success: true, payload: response });
  }
  const response = await getLinks();
  console.log(`this is response ${response.payload}`);
  res.status(201).json({ success: true, payload: response });
  // else {
  //   const response = await getLinkByUserID();
  //   console.log(`this is response ${response.payload}`);
  //   res.status(201).json({ success: true, payload: response });
  // }
});
router.post("/", async function (req, res) {
  const links = await createLink(req.body);
  res.json({ success: true, payload: links });
});
// router.get("/", async function (req, res) {
// if (req.query.week !== undefined) {
//   const result = await getByTopics(req.query.topic);
//   console.log(`this is from week ${result}`);
//   return res.status(200).json({ success: true, payload: result });
// }});
// router.get("/:id", async function (req, res) {
//   const book = await getCardByID(req.params.id);
//   res.status(200).json({ success: true, payload: book });
// });
// router.post("/", async function (req, res) {
//   const newCard = req.body;
//   const result = await createFlashcard(newCard);
//   res.json({ success: true, payload: result });
// });
// router.patch("/:id", async function (req, res) {
//   const data = req.body;
//   const result = await updateFlashCard(req.params.id, data);
//   res.json({ success: true, payload: result });
// });
// router.delete("/:id", async function (req, res) {
//   const result = await deleteFlashcardByID(req.params.id);
//   res.json({ success: true, payload: result });
// });

export default router;
