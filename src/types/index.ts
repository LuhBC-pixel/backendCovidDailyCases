export interface CovidCase {
  location: string;
  date: Date;
  variant: string;
  num_sequences: number;
  perc_sequences: number;
  num_sequences_total: number;
}
