const mongoose=require('mongoose')

const Schema=mongoose.Schema

const PersonSchema=new Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    favoriteFoods:[String]
})

module.exports = Person = mongoose.model('person',PersonSchema);