import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
   charectersAPI ='https://gateway.marvel.com/v1/public/characters?apikey=82b31c7da6de9f3b0fa551eeaa08d967&limit=40&orderBy=-modified&offset=0';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  charectersJson ='assets/data.json'
  constructor(private http: HttpClient) { }
  
  getAllcharacters() {
    return this.http.get(`${this.charectersAPI}`);
  }
  getAllcharactersFromJson() {
    return this.http.get(`${this.charectersJson}`);
  }

}
