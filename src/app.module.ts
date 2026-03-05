import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    UsersModule,
    AuthModule,
    TodosModule,
    MongooseModule.forRoot(process.env.MONGO_URI!),
  ],
  controllers: [AppController], // только основной контроллер приложения
  providers: [AppService], // только AppService
})
export class AppModule {}
