import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// components
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT;
const DATABASE = process.env.DATABASE;

Connection(DATABASE);

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
