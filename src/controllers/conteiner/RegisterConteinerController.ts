import { Request, Response } from 'express';
import { RegisterConteinerService } from '../../services/conteiner/RegisterConteinerService';

class RegisterConteinerController {
    async handle(req: Request, res: Response) {

        const { cliente, conteiner, tipo, status, categoria } = req.body;

        const registerConteiner = new RegisterConteinerService();

        const createConteiner = registerConteiner.execute({ cliente, conteiner, tipo, status, categoria });

        return res.json(createConteiner);

    }
}

export { RegisterConteinerController }