import mongoose, { Mongoose } from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log('Mongodb connected successfully');
        })
        
        connection.on('error',(err)=>{
            console.log('MongoDB connection error, make sure to Mongodb is running.'+err);
            process.exit();
        })

    }
    catch(error){
        console.log("Something went wrong");
        console.log(error);
    }
}