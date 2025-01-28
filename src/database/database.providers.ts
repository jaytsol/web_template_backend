import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { DATABASE_CONNECTION } from 'src/providers/constants';

dotenv.config();

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGODB_URL),
  },
];
