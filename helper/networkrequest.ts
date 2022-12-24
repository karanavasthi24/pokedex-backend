import axios from 'axios';

export class NetworkRequest {
    private _baseUrl: string = 'https://pokeapi.co/api/v2';
    
    constructor() {}
  
    async getRequest(route: string): Promise<any> {
        const rawResponse = await axios({
            method: 'get',
            url: `${this._baseUrl}/${route}`,
            headers: { "Accept-Encoding": "gzip,deflate,compress" }
        });
        return rawResponse.data;
    }
}
