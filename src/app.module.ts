import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['dist/**/*.entity.js'],
      entitiesTs: ['src/**/*.entity.ts'],
      debug: true,
      dbName: 'nest-mikro.sqlite3',
      type: 'sqlite',
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
