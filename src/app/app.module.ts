import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MoviesComponent } from './movies/movies.component';
import { UploadMovieComponent } from './upload-movie/upload-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MainHeroImageComponent } from './main-hero-image/main-hero-image.component';


@NgModule({
   declarations: [
      AppComponent,
      MoviesComponent,
      MainHeaderComponent,
      UploadMovieComponent,
      MovieDetailsComponent,
      MainHeroImageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      MoviesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
