import csv from 'csv-parser';
import fs from 'fs';
import { covidCasesModel } from '../repositories/covidDailyCasesRepositories';
import { dbConnect } from '../services/database';
import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';

export async function run(): Promise<void> {
  await dbConnect();

  fs.createReadStream('./src/covid-variants.csv')
    .pipe(csv())
    .on('data', (row) => {
      const {
        id,
        location,
        date,
        variant,
        num_sequences,
        perc_sequences,
        num_sequences_total,
      } = row;

      const newDate = format(new Date(date), 'yyyy-MM-dd', {
        locale: ptBR,
      });

      const covidDailyCases = new covidCasesModel({
        id,
        location,
        newDate,
        variant,
        num_sequences,
        perc_sequences,
        num_sequences_total,
      });
      covidDailyCases
        .save()
        .then((response: any) => console.log('cadastrado com sucesso'))
        .catch((err: any) => console.log(err));
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
}

run();
