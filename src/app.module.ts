import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';

@Module({
  imports: [],
  controllers: [AppController, ToDoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
