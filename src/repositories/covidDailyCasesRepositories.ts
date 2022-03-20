import mongoose from 'mongoose';
import { CovidCase } from '../types';

const covidCasesSchema = new mongoose.Schema<CovidCase>({
  location: String,
  date: Date,
  variant: String,
  num_sequences: Number,
  perc_sequences: Number,
  num_sequences_total: Number,
});

export const covidCasesModel = mongoose.model<CovidCase>(
  'covidCases',
  covidCasesSchema
);

export let covidDailyCasesRepositories: mongoose.Document<
  unknown,
  any,
  CovidCase
> &
  CovidCase & {
    _id: mongoose.Types.ObjectId;
  };
