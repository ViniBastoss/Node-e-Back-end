import {Router} from "express";
import clientsController from "../Controller/clientsController";


const router = Router();



router.get('clientes/',clientsController.index);


router.get('clientes/create',clientsController.create);
router.post("clientes/create", clientsController.store);
router.get("clientes/edit/:id", clientsController.edit);
router.post("clientes/edit/:id", clientsController.update);
router.get("clientes/del/:id", clientsController.del);

   
   
export default router;