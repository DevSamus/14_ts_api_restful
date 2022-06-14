import express from "express";
import config from "config";
const app = express();
//# Router
import router from "./router";

//* jSON middleware
app.use(express.json());

app.use("/api/", router);
const port = config.get<number>("port");

app.listen(port, "localhost", async () => {
  console.log(`A aplicação estar funcionado na porta ${port}`);
});
