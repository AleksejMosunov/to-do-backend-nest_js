import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
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
  getToDos(@Headers('authorization') token: string) {
    return this.todosService.getTodos(token);
  }

  @Get(':id')
  getToDoById(@Param('id') id: string) {
    return this.todosService.getTodoById(id);
  }

  @Post()
  createTodo(
    @Body() body: CreateTodoDto,
    @Headers('authorization') token: string,
  ) {
    const decodedToken = this.todosService.decodeToken(token);
    const authorId = decodedToken.sub;
    return this.todosService.createTodo(body, authorId);
  }

  @Put(':id')
  updateToDo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todosService.updateTodo(id, body);
  }

  @Delete(':id')
  deleteToDo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id); // id как string
  }

  @Patch(':id/toggle')
  toggle(@Param('id') id: string) {
    return this.todosService.toggleTodoStatus(id);
  }
}
