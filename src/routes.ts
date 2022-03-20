import { Router, Request, Response } from 'express';
// import { casesFunction } from './controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Fullstack Challenge 2021 🏅 - Covid Daily Cases');
});

// router.get('/cases/:date/count', casesFunction.listCasesDate);

router.get('/cases/:date/cumulative', (req: Request, res: Response) => {
  // Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.
});

router.get('/dates', (req: Request, res: Response) => {
  // Listar as datas disponíveis no dataset
});

export default router;
