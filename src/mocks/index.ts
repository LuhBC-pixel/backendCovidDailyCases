import csv from 'csv-parser';
import fs from 'fs';
import {
  covidCasesModel,
  covidDailyCasesRepositories,
} from '../repositories/covidDailyCasesRepositories';
import { dbConnect } from '../services/database';

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
      covidDailyCasesRepositories = new covidCasesModel({
        id,
        location,
        date,
        variant,
        num_sequences,
        perc_sequences,
        num_sequences_total,
      });
      covidDailyCasesRepositories
        .save()
        .then((response: any) => console.log('cadastrado com sucesso'))
        .catch((err: any) => console.log(err));
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
}

run();

export default covidDailyCases;
