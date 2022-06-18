import { Request, Response } from "express";

//# Model

import { MovieModel } from "../model/Movie";

//* Logger

import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error("No sistema !\n", e.message);
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      Logger.error(`o ID:(${id}) não retornou nenhum resultado!`);
      return res.status(404).json({ error: "O filme não existe!" });
    }
    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(` no sistema: ${e.message}`);
    return res.status(404).json({ "error - sistema": e.message });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`Erro sistema: ${e.massage}`);
    return res.status(101).json({ error: e.massage });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      Logger.error(`o ID:(${id}) não retornou nenhum resultado!`);
      return res.status(404).json({ error: "O filme não existe!" });
    }

    await movie.delete();
    res.status(200).json({ 'msn': "Removido com sucesso!" });
  } catch (e: any) {
    Logger.error(`Erro sistema: ${e.massage}`);
    return res.status(101).json({ error: e.massage });
  }
}
