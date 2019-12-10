const express = require('express'); 
const app = express(); 
const cors  = require('cors'); 
const port = 3000; 
const movies = require('./routes/movies');


app.use(cors({origin: '*'}));   

// * * Routes * * 
app.use(movies);




app.listen(port, () => {
    console.log('Connected');
    
}); 