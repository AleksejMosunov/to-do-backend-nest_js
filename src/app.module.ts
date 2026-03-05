import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDosController } from './todos/todo.controller';
import { TodosService } from './todos/todo.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController, ToDosController, AuthController],
  providers: [AppService, TodosService, AuthService],
})
export class AppModule {}
