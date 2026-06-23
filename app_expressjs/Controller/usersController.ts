import {Request, Response} from "express";
import { IUsers} from "../Model/clients";
import usersModel from "../Model/usersModel";

function login (req: Request, res: Response, next: any){

    res.render("login");

}
async function checkLogin (req: Request, res: Response, next: any){

    const login = req.body as IUsers;

    try{
         let logado = await usersModel.findOne({
        where:{
            user: login.user,
            password: login.password
        }
    });

     if(logado != null){
        res.redirect("/clients")
        //OK!
    }
    else{
        //console.log("Senha inválida!")
        throw new Error("Senha inválida!!!")
    }

    }catch(erro){
        console.log(erro);
        res.status(500).end();

    }
}

 export default { login, checkLogin}

