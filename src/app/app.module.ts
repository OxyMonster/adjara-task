import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieImgSliderComponent } from './components/movie-img-slider/movie-img-slider.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UploadMovieComponent } from './components/upload-movie/upload-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MainHeaderComponent,
    MovieImgSliderComponent,
    // MoviesComponent,
    UploadMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    // NgbCarouselConfig
  ],
  bootstrap: [
    AppComponent,
   

  ]
})
export class AppModule { }
