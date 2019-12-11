import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movieID: string; 
  selectedMovie: any = []; 

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieID = this.route.snapshot.params.id;
    console.log(this.route.snapshot.params.id);

    this.getMovieByID(); 
    
  }

  getMovieByID() {
    return this.movieService
               .getMovieByID(this.movieID)
               .subscribe(data => {
                 console.log(data);
                 this.selectedMovie = data; 
                 
               }, err => {
                 console.log(err);

               });
  }

  ngOnDestroy(): void {
    
    this.getMovieByID().unsubscribe(); 
  }

}
