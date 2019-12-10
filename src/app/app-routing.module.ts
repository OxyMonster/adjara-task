import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadMovieComponent } from './upload-movie/upload-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieImgSliderComponent } from './movie-img-slider/movie-img-slider.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  { path: '', component:MovieImgSliderComponent }, 
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }, 
  { path: 'upload-movie', component: UploadMovieComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }
