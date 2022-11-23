import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

import userRoutes from "../backend/routes/userRoutes.js";
import linkRoutes from "../backend/routes/linkRoutes.js";

const app = express();

const PORT = process.env.PORT;

const ELEPHANT = process.env.POSTGRES_CONNECTION_URL;

app.use(morgan("dev"));
app.use(cors("*"));
app.use(express.static("../public"));

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//middleware
app.use("/api/userRoutes", userRoutes);
app.use("/api/linkRoutes", linkRoutes);

app.listen(PORT, () => {
  console.log(`This server is running on ${PORT}`);
});
