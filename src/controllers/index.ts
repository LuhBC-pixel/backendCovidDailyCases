import { Request, Response } from 'express';

interface CovidCase {
  id: number;
  location: string;
  date: Date;
  variant: string;
  num_sequences: number;
  perc_sequences: number;
  num_sequences_total: number;
}

export const casesFunction = {
  async listCasesDate(req: Request, res: Response) {
    // Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.

    const { date } = req.query;

    // const cases = await data.find({});

    // console.log(cases);

    // return res.json(cases);
  },
};
