import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

uploadUrl: string = 'http://localhost:3000/upload-movie'; 
getMoviesUrl: string = 'http://localhost:3000/movies'; 



constructor(
  private http: HttpClient
  
) { }

uploadFile(data: FormData) {
  return this.http.post(this.uploadUrl, data); 

};

submitFormToServer(data: any,) { 
  console.log(data);
  return this.http.post(this.uploadUrl, data); 
  
}; 

getMovies() {
  return this.http.get(this.getMoviesUrl); 
}

}
