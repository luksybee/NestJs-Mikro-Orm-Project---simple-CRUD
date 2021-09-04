import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';

const logger = new Logger('MikroORM');
const config = {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: process.env.DBNAME || 'db.sqlite3',
  type: 'sqlite',
  debug: true,
  logger: logger.log.bind(logger),
  migrations: {
    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
    path: './migrations', // path to the folder with migrations
    pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: true, // allow to disable table and column dropping
    emit: 'ts', // migration generation mode
  },
} as Options;

export default config;
