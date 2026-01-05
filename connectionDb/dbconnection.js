
import mongoose from "mongoose";

const connectDb =  async()=>{
    try{
        await mongoose.connect("mongodb+srv://admin:admin@databaseauth.9nsxhpd.mongodb.net/?appName=DataBaseAuth")
        console.log("db connnect hu chuka ha ")
    }catch(e){
        console.log("e")
    }
}

export default connectDb;