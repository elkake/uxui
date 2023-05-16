import mongoose from "mongoose";
const {DBurl} = require("../config");
// const DBurl = 'mongodb+srv://srt6221:S1UClwcUwBlGsCT2@cluster0.dkmjpel.mongodb.net/';

const dbConnection = async() =>{
    try{
        await mongoose.connect(DBurl);
        console.log("DB online");
    }catch(e){
        console.log(e);
    }
}

export default dbConnection;