require("dotenv").config();
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get("/", async (req: Request, res: Response) => {
  //res.send("Typescript ExpressJS: Hello world, Jefke trying out things");
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
