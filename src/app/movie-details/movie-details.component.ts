import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movieID: string; 
  selectedMovie: any = [];
  isPauseActive: boolean = false; 
  progressValue: string; 
  selectedMovieURL: any;
  

  @ViewChild('video', { static: false }) myVideo: ElementRef; 
  @ViewChild('volume', { static: false }) volume: ElementRef; 


  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    public sanitarizer: DomSanitizer
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
                 this.selectedMovie = data;
    
                 
                 
               }, err => {
                 console.log(err);

               });
  }; 

  togglePlayPause() {   

    if(this.myVideo.nativeElement.paused) {
      this.isPauseActive = true; 
      this.myVideo.nativeElement.play(); 
      
    } else {
      this.isPauseActive = false; 
      this.myVideo.nativeElement.pause(); 

    }  
  }; 

  getVideoProgress() {
    let progressPos = this.myVideo.nativeElement.currentTime / this.myVideo.nativeElement.duration;
     this.progressValue = (progressPos * 100) + '%'; 
     
  }; 

  fullScreen() {

    this.myVideo.nativeElement.requestFullscreen();

  };

  toggleVolume(e) {

   this.myVideo.nativeElement.volume = e.target.value / 100; 

  }

  



  ngOnDestroy(): void {
    
    // this.getMovieByID().unsubscribe(); 
  }

}
