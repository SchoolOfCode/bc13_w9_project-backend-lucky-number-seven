import express from "express";
import morgan from "morgan";
import "dotenv/config";

import sqlRoutes from "../backend/routes/sqlRoutes.js";
import linkRoutes from "../backend/routes/linkRoutes.js";

const app = express();

const PORT = process.env.PORT;

const ELEPHANT = process.env.POSTGRES_CONNECTION_URL;

app.use(morgan("dev"));

app.use(express.static("../public"));

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//middleware
app.use("/api/sqlRoutes", sqlRoutes);
app.use("/api/linkRoutes", linkRoutes);

app.listen(PORT, () => {
  console.log(`This server is running on ${PORT}`);
});
