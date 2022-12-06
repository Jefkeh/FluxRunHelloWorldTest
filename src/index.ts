require("dotenv").config();
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get("/", async (req: Request, res: Response) => {
  res.send("Typescript ExpressJS: Hello world, Jefke trying out things");
});

app.listen(port, () => {
  console.log(`New Version: App listening at http://localhost:${port}`);
});
