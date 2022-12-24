import { Request, Response } from 'express';
import { PokemonModel } from '../models/pokemon';
import { Pokemon } from '../types/pokemon';

export function index(req: Request, res: Response) {
  res.send('Welcom to Pokedex');
}

export async function getById(req: Request, res: Response) {
  try {
    const response: Pokemon = await PokemonModel.findById(req.params.id);
    if (response.id == -1){
      res.status(404);
      return res.send('No pokemon found');
    }
    res.status(200);
    return res.send(response);
  } catch(err: any){
    res.status(500);
    return res.send('Unable to reach pokedex api');
  }
}

export async function getByName(req: Request, res: Response) {
  try {
    const response: Pokemon = await PokemonModel.findByName(req.params.name);
    if (response.id == -1){
      res.status(404);
      return res.send('No pokemon found');
    }
    res.status(200);
    return res.send(response);
  } catch(err: any){
    res.status(500);
    return res.send('Unable to reach pokedex api');
  }
}
