import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNil } from '@nestjsx/util';


require('dotenv').config();

const type = (process.env.DB_TYPE as any) || 'postgres';
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '5434';
const username = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASSWORD || 'lucaseidi';
const database = process.env.DB_DATABASE || 'fumico';
const synchronize = process.env.DB_SYNC === 'true';
const ssl = process.env.DB_SSL === 'true';

export const defaultConfig: TypeOrmModuleOptions = {
  type,
  host,
  port: parseInt(port, 10),
  username,
  password,
  database,
  synchronize,
  extra:
    ssl === true
      ? {
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : { ssl: false },
  logging: !isNil(process.env.TYPEORM_LOGGING)
    ? !!parseInt(process.env.TYPEORM_LOGGING, 10)
    : true,
  entities: [
    join(__dirname, './**/*.entity{.ts,.js}'),
    __dirname + './**/*.entity{.ts,.js}',
    join(__dirname, './entities/*.entity{.ts,.js}'),
    __dirname + './entities/*.entity{.ts,.js}',
  ]
};
