require("dotenv").config();
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


const fs = require('fs');
fs.readFileSync(`${__dirname}\\index.html`);

app.get("/", async (req: Request, res: Response) => {
  //res.send("Typescript ExpressJS: Hello world, Jefke trying out things");
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`New Version: App listening at http://localhost:${port}`);
});
