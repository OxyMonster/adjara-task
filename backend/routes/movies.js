const express = require('express'); 
const router = express.Router(); 
const multer = require('multer'); 

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads'); 
    }, 
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname); 
    }
}); 

const upload = multer({ storage: storage }); 

const movies = []; 


router.get('/movies', (req, res) => {
    res.status(200).json(movies); 
}); 

router.post('/upload-movie', upload.single('movieImg'), (req, res) => {

    console.log(req.file);
    console.log(req.body);
    
    const movie = {
        id: movies.length + 1, 
        title: req.body.title, 
        description: req.body.description, 
        movieImg: req.file.path
    }; 

     movies.push(movie); 
     return res.status(200).json(movie); 
}); 


module.exports = router; 