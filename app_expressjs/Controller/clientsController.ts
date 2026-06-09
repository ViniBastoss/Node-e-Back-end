import {Request, Response} from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index (req: Request, res: Response, next: any){
// res.render("index") <-- comentando o render
const clients = await clientsModel.findAll();
res.json(clients)
}
export default { index };

