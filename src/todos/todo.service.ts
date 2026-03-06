import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateTodoDto } from 'src/todos/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todos/dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  private validateId(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid Todo ID');
    }
  }

  async getTodos(token: string): Promise<Todo[]> {
    const decodedToken = this.decodeToken(token);
    const userId = decodedToken.sub;
    return this.todoModel.find({ authorId: userId }).exec();
  }

  public decodeToken(token: string): any {
    try {
      // убираем "Bearer " если есть
      const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;
      const payload = jwt.decode(actualToken);
      return payload;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async createTodo(
    createTodoDto: CreateTodoDto,
    authorId: string,
  ): Promise<Todo> {
    const createdTodo = new this.todoModel({ ...createTodoDto, authorId });
    return createdTodo.save();
  }

  async updateTodo(
    id: string,
    updateData: UpdateTodoDto,
  ): Promise<Todo | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid Todo ID');
    }

    return this.todoModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async deleteTodo(id: string): Promise<Todo | null> {
    this.validateId(id);
    return this.todoModel.findByIdAndDelete(id).exec();
  }

  async getTodoById(id: string): Promise<Todo | null> {
    this.validateId(id);
    return this.todoModel.findById(id).exec();
  }

  async toggleTodoStatus(id: string): Promise<Todo | null> {
    this.validateId(id);
    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new BadRequestException('Todo not found');
    }

    todo.completed = !todo.completed;
    return todo.save();
  }
}
