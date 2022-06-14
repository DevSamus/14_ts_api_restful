import { Router, Request, Response } from "express";

const router = Router(); //# iniciando o Router!!

export default router.get("/test",(req:Request, res: Response) => {
	return res.status(200).send("API working!")
});
