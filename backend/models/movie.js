const mongoose = require('mongoose'); 

const objId = mongoose.ObjectId

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    title : { type: String, required: true },
    description : { type: String, required: true },
    movieImg: { type: String, required: true }
}); 


module.exports = mongoose.model('Movie', movieSchema);  

