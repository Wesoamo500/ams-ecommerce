import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import * as process from 'process'
import { DataSource } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { Address } from '../user/entities/address.entity';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD as string,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Address],
      synchronize: true
    }),
    UserModule,
    AuthModule
  ],
})
export class AppModule { 
  constructor(private dataSource: DataSource){}
}
