const express = require('express'); 
const router = express.Router(); 
const multer = require('multer'); 
const Movie = require('../models/movie'); 
const mongoose = require('mongoose'); 



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb( null, './uploads'); 
    }, 
    filename: function(req, file, cb) {
        cb( null, file.originalname); 
    }
}); 



const upload = multer({ 
    storage: storage, 
}); 

const movies = []; 


router.get('/movies', (req, res) => {
    Movie.find()
         .then(result => {
             res.status(200).json(result); 
         })
         .catch(err => {
             console.log(err);
         });
}); 

router.get('/movies/:id', (req, res) => {
    
    const movieID = req.params.id; 

    Movie.findById(movieID)
         .then(result => {
             res.status(200).json(result); 
    
             
         }, err => {
             console.log(err);
             res.status(400).json(err);
         }); 

   
}); 

router.get('/uploads/:id', (req, res) => {
    console.log(req.params.id);
    // res.status(200).download('../backend/uploads/' + req.params.id )
    res.status(200).download('../backend/uploads/' + req.params.id )

})

router.post('/upload-movie', upload.array('movieFiles'), (req, res) => {

    console.log(req.files);
    // console.log(req.body);

    const movie = new Movie({
        _id:  new mongoose.Types.ObjectId(), 
        title: req.body.title, 
        description: req.body.description, 
        movieFiles: req.files, 

    }); 

    movie.save()
         .then(result => {
             console.log(result);
             
         }) 
         .catch( err => {
             console.log(err);

         }); 
    movies.push(movie); 
    return res.status(200).json(movie); 
}); 


module.exports = router; 
