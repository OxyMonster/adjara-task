import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  moviesList: any = []; 

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {

    this.getMovies();

  }

  getMovies() {
    return this.moviesService
               .getMovies()
               .subscribe( data => {
                 console.log(data);
                 this.moviesList = data; 
                  
                }, err => {
                  console.log(err);
                }); 
  }; 


  ngOnDestroy() {
    this.getMovies().unsubscribe(); 
  }

}
