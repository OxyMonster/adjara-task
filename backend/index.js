const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');  

const cors  = require('cors'); 
const movies = require('./routes/movies');


// * * *  Connect to the MongoDB dataBase * * * 
// mongoose.connect('mongodb+srv://Oxymonster:<zeika753951>@cluster0-4dqtm.mongodb.net/test', {
//          useNewUrlParser: true, useUnifiedTopology: true,
//          useNewUrlParser: true, })
//         .then( () => {
//             console.log('Connected to MongoDB');  
//         })
//         .catch(err => { 
//             console.log(err);

//         }); 

// * * *   MiddleWare for Cors-Origin * * * 
app.use(cors({origin: '*'}));   


// * * *  Routes  * * *  
app.use(movies);



// * * *  Listen to server * * * 
app.listen( 3000, () => {
    console.log('Connected');
    
}); 