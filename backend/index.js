const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');  

const cors  = require('cors'); 
const movies = require('./routes/movies');

const URI  = 'mongodb+srv://oxymonster:zz753951@cluster0-f86o7.mongodb.net/test?retryWrites=true&w=majority'; 

// * * *  Connect to the MongoDB dataBase * * * 
mongoose.connect( URI, {
         useNewUrlParser: true, 
         useUnifiedTopology: true,
         })
        .then( () => {
            console.log('Connected to MongoDB');  
        })
        .catch(err => { 
            console.log(err);

        }); 

// * * *   MiddleWare for Cors-Origin * * * 
app.use(cors({origin: '*'}));   


// * * *  Routes  * * *  
app.use(movies);



// * * *  Listen to server * * * 
app.listen( 3000, () => {
    console.log('Connected');
    
}); 