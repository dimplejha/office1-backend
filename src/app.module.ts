import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Map } from './map/entities/map.entity';
import { MapModule } from './map/map.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: false,
      entities:[Map],
      synchronize: true,


    }),MapModule,

    // eslint-disable-next-line prettier/prettier
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
