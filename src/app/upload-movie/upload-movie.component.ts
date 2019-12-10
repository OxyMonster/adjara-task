import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-upload-movie',
  templateUrl: './upload-movie.component.html',
  styleUrls: ['./upload-movie.component.scss']
})
export class UploadMovieComponent implements OnInit {

  movieForm: FormGroup; 
  selectedFile: File = null; 

  constructor(
    private fb: FormBuilder, 
    private movieService: MoviesService
    ) { 
    this.movieForm = this.fb.group({
      title : [ '', Validators.required  ],
      description : [ '', Validators.required ],
      movieImg: [ '' , Validators.required ]
    })
  }

  ngOnInit() {

  }

  onFileSelected(event: any) {
    // console.log(event.target.files[0]);
    
    // if(event.target.files.legth > 0) {
      this.selectedFile = event.target.files[0]; 
      // console.log(this.selectedFile); 
      this.movieForm.get('movieImg').setValue(this.selectedFile); 
      console.log(this.movieForm.get('movieImg').value);
      
    // }; 

  }; 


  onSubmit(form: FormGroup) {

    const uploadData = new FormData();
    uploadData.append('title', this.movieForm.get('title').value);
    uploadData.append('description', this.movieForm.get('description').value);
    uploadData.append('movieImg', this.movieForm.get('movieImg').value);    
        
    
    this.movieService
        .submitFormToServer(uploadData)
        .subscribe( data => {
          console.log(data);

        }, err => {
          console.log(err);

        } ); 

    this.movieForm.reset(); 
  }; 

}
