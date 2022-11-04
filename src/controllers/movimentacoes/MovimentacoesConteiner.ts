import { Request, Response } from 'express';
import { MovimentacoesConteinerService } from '../../services/movimentacoes/MovimentacoesConteinerService';

class MovimentacoesConteiner{
    async handle(req: Request, res: Response){

        const {  } = req.body;

        const movimentacaoConteiner = new MovimentacoesConteinerService();

        const movimentacoes = movimentacaoConteiner.execute();

        return res.json(movimentacoes);

    }
}

export { MovimentacoesConteiner }