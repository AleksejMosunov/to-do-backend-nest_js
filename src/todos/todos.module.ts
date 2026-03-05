import { Module } from '@nestjs/common';
import { ToDosController } from './todo.controller';
import { TodosService } from './todo.service';

@Module({
  imports: [], // others modules if needed
  controllers: [ToDosController], // controllers for handling requests (HTTP endpoints)
  providers: [TodosService], // services with CRUD logic
  exports: [TodosService], // if we want to use the service in other modules
})
export class TodosModule {}
