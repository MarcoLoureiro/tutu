import {connect} from "mongoose";
import dotenv from 'dotenv'


dotenv.config()
export const mongoDb = async () =>{
    
    try {
        console.log("Conectar banco");
        await connect(process.env.MONGO_URL as string);
        console.log("Ok");


    } catch (e) {
        console.log(`Erro ${e}`);

    }
}