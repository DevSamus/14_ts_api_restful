import {Request, Response } from "express";

//# Model 

import { MovieModel } from "../model/Movie";

//* Logger

import Logger from "../../config/logger";


export async function createMovie(req:Request, res: Response){
	return res.status(200).send("Deu certo o controle!");

}