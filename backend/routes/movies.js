const express = require('express'); 
const router = express.Router(); 
const multer = require('multer'); 
const Movie = require('../models/movie'); 
const mongoose = require('mongoose'); 
const URL  = 'http://localhost:3000/';


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb( null, './uploads'); 
    }, 
    filename: function(req, file, cb) {
        cb( null, new Date().toISOString() + file.originalname); 
    }
}); 



const upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5 
    },
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

router.post('/upload-movie', upload.single('movieImg'), (req, res) => {

    // console.log(req.file);
    // console.log(req.body);

    const movie = new Movie({
        _id:  new mongoose.Types.ObjectId(), 
        title: req.body.title, 
        description: req.body.description, 
        movieImg: URL + req.file.path
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
