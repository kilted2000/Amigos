import mongoose from "mongoose";



global.mongoose = {
    conn: null,
    promise: null,
}

export default async function dbConnect() {
    if(mongoose.conn && global.mongoose.conn){
        console.log("Using existing connection");
        return global.mongoose.conn;
    }else{
          console.log("Creating new connection");
        const user = process.env.MONGODB_USER;
        const password = process.env.MONGODB_PASSWORD;
        const database = process.env.MONGODB_DATABASE;
        const connString = `mongodb+srv://${user}:${password}@cluster0.5lptew5.mongodb.net/${database}`
        const promise = mongoose.connect(connString, {  
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
        }).then(mongoose => mongoose);

        global.mongoose = {
            conn: await promise,
            promise: promise,

        
    }

    return await promise;   
}
}