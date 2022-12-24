import { Pokemon } from '../types/pokemon';
import { LocalCache } from '../helper/cache';
import { NetworkRequest } from '../helper/networkrequest';
import { Logger } from '../helper/logger';

const logger: Logger = Logger.getInstance();
const cache: LocalCache = LocalCache.getInstance();

export class PokemonModel {
  static async findById(id: string): Promise<Pokemon> {
      let responseFromCache = cache.get(`id/${id}`);
      if (responseFromCache != undefined){
        return responseFromCache;
      }
      let request: NetworkRequest = new NetworkRequest();
      try {
        let response = await request.getRequest(`pokemon/${id}`);
        if (typeof response != 'object'){
          return { id: -1, name: '' };
        }
        cache.set(`id/${id}`, response);
        return response;
      } catch(err: any){

        logger.error(`Error occurred while fetching from api: ${err.message}`);
        throw err;
      }
    }

    static async findByName(name: string): Promise<Pokemon> {
      let responseFromCache = cache.get(`name/${name}`);
      if (responseFromCache != undefined){
        return responseFromCache;
      }
      let request: NetworkRequest = new NetworkRequest();
      try {
        let response = await request.getRequest(`pokemon/${name}`);
        if (typeof response != 'object'){
          return { id: -1, name: '' };
        }
        cache.set(`name/${name}`, response);
        return response;
      } catch(err: any){
        logger.error(`Error occurred while fetching from api: ${err.message}`);
        throw err;
      }
  }
}
  