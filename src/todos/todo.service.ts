import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todos/dto/update-todo.dto';
import ToDo from './entities/ToDo';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getTodos(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async getTodoById(id: number): Promise<Todo | null> {
    return this.todoModel.findById(id).exec();
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async updateTodo(
    id: number,
    updateData: UpdateTodoDto,
  ): Promise<Todo | null> {
    return this.todoModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async deleteTodo(id: number): Promise<Todo | null> {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
