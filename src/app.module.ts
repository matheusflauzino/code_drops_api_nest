import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.MONGO_URL)],
})
export class AppModule {}
