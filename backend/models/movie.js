const mongoose = require('mongoose'); 

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    title : { type: String, required: true },
    description : { type: String, required: true },
    movieFiles: { type: Object, required: true }
}); 


module.exports = mongoose.model('Movie', movieSchema);  

