import { Router } from "express";
import { RegisterConteinerController } from "./controllers/conteiner/RegisterConteinerController";

const router = Router();

router.post('/register', new RegisterConteinerController().handle)


export default router;