import {Schema, model,Model, connection} from 'mongoose';

type UserType = {
    email:string,
    password:string
}


const schema = new Schema<UserType>({
    email:{required:true,type:String},
    password:{required:true,type:String}
});


const modelName = 'Usuario';


export default (connection && connection.models[modelName])?
connection.models[modelName] as Model<UserType>
:
model<UserType>(modelName,schema);