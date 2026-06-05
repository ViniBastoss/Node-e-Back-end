import express from "express";
import clientsRouter from "./Router/clients"

const app = express();

app.use(clientsRouter);
app.set("view engine", "pug");
app.set("views", "./Views")

app.listen(process.env.PORT,()=>{
    console.log("Servidor ligado!")

});