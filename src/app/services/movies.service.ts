import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

UPLOAD_URL: string = 'http://localhost:3000/upload-movie'; 
GET_ALL_MOVIES_URL: string = 'http://localhost:3000/movies'; 




constructor(
  private http: HttpClient
  
) { }

// uploadFile(data: FormData) {
//   return this.http.post(this.UPLOAD_URL, data); 

// };

submitFormToServer(data: any,) { 
  console.log(data);
  return this.http.post(this.UPLOAD_URL, data); 
  
}; 

getMovies() {
  return this.http.get(this.GET_ALL_MOVIES_URL); 
}; 

getMovieByID(movieID: string) {
  return this.http.get(`${this.GET_ALL_MOVIES_URL}/${movieID}`); 
}

}
