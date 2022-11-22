import express from "express";
const router = express.Router();

// import { getUsers, getFlashcardByTitle, getCardByID, createFlashcard, updateFlashCard, deleteFlashcardByID } from "../models/flashcardsModels.js"
import { getUsers  } from "../models/sqlModels.js"


  router.get("/", async function (req, res) {
    // if (req.query.title !== undefined) {
    //   const result = await getFlashcardByTitle(req.query.title);
    //   console.log(`this is from search by title ${result}`)
    //    return res.status(200).json({ success: true, payload: result });
    // } else {

    const response = await getUsers()
    console.log(`this is response ${response.payload}`)
    return res.status(201).json({ success: true, payload: response });
    });

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