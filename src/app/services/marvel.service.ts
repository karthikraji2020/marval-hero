import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {
   charectersAPI ='https://gateway.marvel.com/v1/public/characters?apikey=82b31c7da6de9f3b0fa551eeaa08d967&limit=40&orderBy=-modified&offset=0';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  charectersJson ='assets/characters.json';
  comicsJson ='assets/comics.json';
  seriesJson ='assets/series.json';
  constructor(private http: HttpClient) { }
  

  getAllCharacters() {
    return this.http.get(`${this.charectersJson}`).
    pipe(retry(1),catchError(this.handleError));
  }
  getAllComics() {
    return this.http.get(`${this.comicsJson}`).
    pipe(retry(1),catchError(this.handleError));
  }
  getAllSeries() {
    return this.http.get(`${this.seriesJson}`).
    pipe(retry(1),catchError(this.handleError));
  }

  getCharactersById(id) {
    return this.http.get(`${this.charectersJson}`).
       pipe(map((val: any) => val.data.results.filter((item: any)=> item.id == id)));
  }
  getComicsById(id) {
    // return this.http.get(`${this.comicsJson}?id=${id}`).
    return this.http.get(`${this.comicsJson}`).
    pipe(map((val: any) => val.data.results.filter((item: any)=> item.id == id)));
  };
 
  getSeriesById(id) {
    return this.http.get(`${this.seriesJson}`).
       pipe(map((val: any) => val.data.results.filter((item: any)=> item.id == id)));
  }


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
