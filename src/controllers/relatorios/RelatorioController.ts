import { Request, Response } from 'express';
import { RelatorioService } from '../../services/relatorios/RelatorioService';

class RelatorioController {
    async handle(req: Request, res: Response) {


        const relatorioservice = new RelatorioService();

        const relatorio = relatorioservice.execute();

        return res.json(relatorio);

    }
}

export { RelatorioController }