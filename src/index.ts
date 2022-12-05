require("dotenv").config();
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get("/", async (req: Request, res: Response) => {
  //res.send("Typescript ExpressJS: Hello world, Jefke trying out things");
  res.sendFile(path.join(__dirname, '/FluxRunHelloWorldTest/index.html'));
});


const testFolder = '/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

app.listen(port, () => {
  console.log(`New Version: App listening at http://localhost:${port}`);
});
