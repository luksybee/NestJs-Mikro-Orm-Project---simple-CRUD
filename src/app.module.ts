import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: 'nest-mikro.sqlite3',
      type: 'sqlite',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
