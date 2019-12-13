import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadMovieComponent } from './upload-movie/upload-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MainHeroImageComponent } from './main-hero-image/main-hero-image.component';


const routes: Routes = [
  { path: '', component: MainHeroImageComponent }, 
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
