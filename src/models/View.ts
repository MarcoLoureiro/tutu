import axios from "axios";


export const sendPostRequest = async (email:string,password:string) => {
    try {
        const resp = await axios.post('http://localhost:3000/registration',{
            email,
            password
        });
        return resp.data;
    } catch (err) {
        console.error(err);
    }
};


export const getRegistredUser = async (emailLogin:string,passwordLogin:string) =>{
    try{
        const resp  = await axios.post('http://localhost:3000/registred-user',{
            emailLogin,
            passwordLogin
        });
        return resp.data;
    } catch(err){
        console.log(err);
    }
}