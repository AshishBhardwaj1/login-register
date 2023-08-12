const mongoose = require('mongoose')
const connectDb = async ()=>{
    try{

        await mongoose.connect('mongodb://127.0.0.1:27017/mydb')
        console.log("connected to mongo db");
    } 
    catch(error){
console.log(error);
    }
}
module.exports = connectDb
