import {Request,Response} from 'express';
import { sendPostRequest,getRegistredUser } from '../models/View';
import axios from 'axios';
//import AWM from 'awesome-notifications';

var email:string,password:string,emailLogin:string,passwordLogin:string;
//let globalOptions:any = {};
//let notifier:any = new AWM(globalOptions)
//let nextCallOptions:any = {}

export const homePage = (req:Request,res:Response) =>{
    res.render('pages/home');
}

export const loginPage = (req:Request,res:Response) =>{
        res.render('pages/login');
}

export const registrationPage = (req:Request,res:Response) =>{
        res.render('pages/createAccount');
}

export const registration = async (req:Request,res:Response) =>{
        email = req.body.email;
        password = req.body.password;
        sendPostRequest(email,password);
        res.redirect('./login');
}

export const login = async (req:Request,res:Response) =>{
        emailLogin = req.body.email;
        passwordLogin = req.body.password;
        let data = await getRegistredUser(emailLogin,passwordLogin);
        /*
        if(emailLogin.length>0 && passwordLogin.length>0){

                let loginUser = emailLogin;
                let loginSlice = loginUser.slice(1);
                emailLogin = loginUser.charAt(0).toUpperCase()+loginSlice;

                let loginData = data.email;
                let sliceData = loginData.slice(1);
                data.email = loginData.charAt(0).toUpperCase()+sliceData;
        }*/
        if(data.email == emailLogin && data.password == passwordLogin){
                res.render('pages/dashboardInicial',{
                        data
                })
        }else{
                res.redirect('/login');
        }
}




export {email,password,emailLogin,passwordLogin}
