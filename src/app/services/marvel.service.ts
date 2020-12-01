import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  
  getAllCharacters() {
    return this.http.get(`${environment.charectersAPI}`).
    pipe(retry(1),catchError(this.handleError));
  }
  getAllComics() {
    return this.http.get(`${environment.comicsAPI}`).
    pipe(retry(1),catchError(this.handleError));
  }
  getAllSeries() {
    return this.http.get(`${environment.seriesAPI}`).
    pipe(retry(1),catchError(this.handleError));
  }

  getCharactersById(id) {
    return this.http.get(`${environment.charectersAPI}`).
       pipe(map((val: any) => val.data.results.filter((item: any)=> item.id == id)));
  }
  getComicsById(id) {
    // return this.http.get(`${this.comicsJson}?id=${id}`).
    return this.http.get(`${environment.comicsAPI}`).
    pipe(map((val: any) => val.data.results.filter((item: any)=> item.id == id)));
  };
 
  getSeriesById(id) {
    return this.http.get(`${environment.seriesAPI}`).
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
