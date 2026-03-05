import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';

import { UpdateTodoDto } from 'src/todos/dto/update-todo.dto';
import { TodosService } from 'src/todos/todo.service';

@Controller('todos')
export class ToDosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getToDos() {
    return this.todosService.getTodos();
  }

  @Get(':id')
  getToDoById(@Param('id') id: string) {
    return this.todosService.getTodoById(Number(id));
  }

  @Post()
  createTodo(@Body() body: CreateTodoDto) {
    return this.todosService.createTodo(body);
  }

  @Put(':id')
  updateToDo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todosService.updateTodo(Number(id), body);
  }

  @Delete(':id')
  deleteToDo(@Param('id') id: string) {
    return this.todosService.deleteTodo(Number(id));
  }
}
