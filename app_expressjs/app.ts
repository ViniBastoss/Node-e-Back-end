import express from "express";
import clientsRouter from "./Router/clients"

const app = express();

app.use(clientsRouter);

app.listen(3000,()=>{
    console.log("Servidor ligado!")

});