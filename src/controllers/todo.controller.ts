import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/create-todo.dto';

import { UpdateTodoDto } from 'src/dto/update-todo.dto';
import { TodoService } from 'src/services/todo.service';

@Controller('todos')
export class ToDoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getToDos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getToDoById(@Param('id') id: string) {
    return this.todoService.getTodoById(Number(id));
  }

  @Post()
  createTodo(@Body() body: CreateTodoDto) {
    return this.todoService.createTodo(body);
  }

  @Put(':id')
  updateToDo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todoService.updateTodo(Number(id), body);
  }

  @Delete(':id')
  deleteToDo(@Param('id') id: string) {
    return this.todoService.deleteTodo(Number(id));
  }
}
