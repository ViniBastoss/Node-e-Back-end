import {Router} from "express";
import clientsController from "../Controller/clientsController";


const router = Router();



router.get('/',clientsController.index);
router.get('/:id',clientsController.show);

router.get('/create',clientsController.create);
router.post("/create", clientsController.store);
router.get("/edit", clientsController)
   

router.get('/sobrenos',(req, res)=>{
    res.send("<h2>Rota sobre nós</h2>")
})

export default router;;