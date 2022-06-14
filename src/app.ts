import express from "express";
import config from "config";
const app = express();

const port:number =3000
app.listen(port, "localhost", async () => {
	console.log(`A aplicação estar funcionado na porta ${port}`);
	
})