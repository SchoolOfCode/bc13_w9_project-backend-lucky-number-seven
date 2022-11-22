import express from "express";
import morgan from "morgan";
import 'dotenv/config';


import sqlRouter from "../backend/routes/sqlRoutes.js"; 

const app = express()

const PORT = process.env.PORT;

const ELEPHANT = process.env.POSTGRES_CONNECTION_URL;


app.use(morgan("dev"));

app.use(express.static("../public"));

app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/api/sqlRoutes", sqlRouter);

  
  app.listen(3000, ()=>{console.log(`This server is running on ${PORT}`)})