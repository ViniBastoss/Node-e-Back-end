import {Request, Response} from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index (req: Request, res: Response, next: any){
// res.render("index") <-- comentando o render
const clients = await clientsModel.findAll();
res.json(clients)

}
async function show (req: Request, res: Response, next: any){
// res.render("index") <-- comentando o render
const client = await clientsModel.findByPk(req.params.id);
res.json(client)
}

async function create (req: Request, res: Response, next: any){
res.render("create")
}
    

async function store (req: Request, res: Response, next: any){
    let client = req.body as IClients

    await clientsModel.create({...client});
    res.redirect("/");
}
export default { index, create,store,show};

