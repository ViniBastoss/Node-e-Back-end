import {Router} from "express";

const router = Router();



router.get('/',(req, res)=>{
    res.send("<h1>Rota Inicial</h1>")
})
router.get('/sobrenos',(req, res)=>{
    res.send("<h2>Rota sobre nós</h2>")
})

export default router;