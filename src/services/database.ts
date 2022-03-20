import mongoose from 'mongoose';
import 'dotenv/config';

const uri = String(process.env.DATABASE_CONNECT);

export async function dbConnect() {
  try {
    await mongoose.connect(uri);
    console.log('Conectado com sucesso');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}