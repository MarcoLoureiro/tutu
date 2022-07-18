import express,{Request,Response, urlencoded} from "express";
import mustache from "mustache-express";
import dotenv from 'dotenv';
import path from "path";
import { mongoDb } from "./database/mongoDb";
import apiRoutes from "./routes/api";
import cors from 'cors';
const server = express();

dotenv.config();
server.set('view engine','mustache');
server.engine('mustache',mustache());


server.use(express.static(path.join(__dirname,'../public')));
server.set('views',path.join(__dirname,'./views'));


server.use(urlencoded({extended:true}));

server.use(cors({}));
mongoDb();

server.use(apiRoutes);

//Routes

server.use((req:Request,res:Response)=>{
    res.status(404);
    res.send("Não encontrado");
});

server.listen(process.env.SERVER_PORT);

export default server;