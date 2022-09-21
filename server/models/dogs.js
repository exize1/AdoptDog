const mongoose = require('mongoose')


const DogSchema = mongoose.Schema({
    src: {
        type : String,
        required : true
    },
    dogName: {
        type : String,
        required : true
    },
    shortDescription: {
        type : String,
        required : true
    },
    gender: {
        type : String,
        required : true
    },
    age: {
        type : String,
        required : true
    },
    size: {
        type : String,
        required : true
    },
    adopted: {
        type : Boolean 9v,
        required : true
    }
})

const Dog = mongoose.model('dog', DogSchema)
module.exports = Dog