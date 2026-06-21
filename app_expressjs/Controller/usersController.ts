import {Request, Response} from "express";
import { IUsers} from "../Model/clients";
import usersModel from "../Model/usersModel";

function login (req: Request, res: Response, next: any){

    res.render("login");

}
async function checkLogin (req: Request, res: Response, next: any){

    const login = req.body as IUsers;

    let logado = await usersModel.findOne({
        where:{
            user: login.user,
            password: login.password
        }
    });

    if(logado != null){
        //OK!
    }
    else{
        //NOT OK
    }

}




 export default { login, checkLogin}

