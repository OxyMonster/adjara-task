import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  moviesList: any = []; 
  localHost: 'http://localhost:3000/'

  constructor(
    private moviesService: MoviesService,
    public sanitarizer:DomSanitizer
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
