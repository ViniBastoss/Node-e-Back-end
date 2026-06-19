import {Router} from "express";
import clientsController from "../Controller/clientsController";


const router = Router();



router.get('/',clientsController.index);


router.get('/create',clientsController.create);
router.post("/create", clientsController.store);
router.get("/edit/:id", clientsController.edit);
router.post("/edit/:id", clientsController.update);
router.get("/del/:id", clientsController.del);

   
   


router.get('/sobrenos',(req, res)=>{
    res.send("<h2>Rota sobre nós</h2>")
})

router.get('/:id',clientsController.show);

export default router;;