import { Request,Response } from "express";
import User from "../models/User";
import { email,password,emailLogin,passwordLogin } from "./viewController";


export const registration = async (req:Request,res:Response) => {
        var validation = false;
        let users = await User.find({});
        
        users.map((item,index)=>{
            if(item.email==email && validation==false){
                validation = true;
            }
        });
        console.log('Validation: ',validation)
    if(email && password && validation==false){
        let newUser = new User();
        newUser.email = email;
        newUser.password = password;
        await newUser.save();
        res.status(200).json(newUser);
        
    }else{
        res.status(400).json({error:'Error during registration'});
    }

}

export const getUsers = async (req:Request,res:Response) => {
    let users = await User.find({});
    if(users){
        res.status(200).json(users);
    }else{
        res.status(400).json({error:'Error getting users'});
    }
}

export const findRegistredUser = async (req:Request,res:Response) =>{
    if(emailLogin && passwordLogin){
        let registredUserLogin = await User.findOne({email:emailLogin,password:passwordLogin});
        if(registredUserLogin){
            res.status(200).json(registredUserLogin);
        }else{
            res.json({error:'Usuário não encontrado'});
        }
    }else{
        res.status(400).json({error:'Erro ao tentar encontrar usuário'});
    }
}