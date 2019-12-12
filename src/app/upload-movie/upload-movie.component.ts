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
  showError: boolean = false; 

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
      this.selectedFile = event.target.files[0]; 
      this.movieForm.get('movieImg').setValue(this.selectedFile); 
      // console.log(this.movieForm.get('movieImg').value);

  }; 


  onSubmit() {

    const uploadData = new FormData();
    uploadData.append('title', this.movieForm.get('title').value);
    uploadData.append('description', this.movieForm.get('description').value);
    uploadData.append('movieImg', this.movieForm.get('movieImg').value);    
        
    this.isFormValid(); 
    if(this.showError) {
    this.movieService
        .submitFormToDB(uploadData)
        .subscribe( data => {
          console.log(data);
          this.showError = false; 

        }, err => {
          console.log(err);

        }); 

    this.movieForm.reset(); 
  } else {
    this.showError = true;   
  }; 
};

isFormValid() {
  
  if (this.selectedFile && this.movieForm.value.title && this.movieForm.value.description) {
    this.showError = true; 
  } else {
    this.showError = false; 
  }
}

}
