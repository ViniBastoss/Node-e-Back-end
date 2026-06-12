import {Router} from "express";
import clientsController from "../Controller/clientsController";


const router = Router();



router.get('/',clientsController.index);

router.get('/create',clientsController.create);
   

router.get('/sobrenos',(req, res)=>{
    res.send("<h2>Rota sobre nós</h2>")
})

export default router;;