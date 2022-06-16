// # .Env variables
require("dotenv").config();

import express from "express";
import config from "config";
const app = express();
//# Router
import router from "./router";
//* DB
import db from "../config/db";

app.use(express.json());
//* jSON middleware

//# Logger
import Logger from "../config/logger";

app.use("/api/", router);
const port = config.get<number>("port");

app.listen(port, "localhost", async () => {
  await db();
  //* console.log(`A aplicação estar funcionado na porta ${port}`);
  Logger.info(`A aplicação estar funcionado na porta ${port}`);
});
