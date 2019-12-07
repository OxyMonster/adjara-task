import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadMovieComponent } from './components/upload-movie/upload-movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieImgSliderComponent } from './components/movie-img-slider/movie-img-slider.component';


const routes: Routes = [
  { path: '', component:MovieImgSliderComponent }, 
  { path: 'movies', component: MoviesComponent },
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
