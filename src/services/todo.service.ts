import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/dto/update-todo.dto';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  status?: 'pending' | 'in-progress' | 'completed';
  createdAt?: Date;
  updatedAt?: Date;
  completedAt?: Date;
};

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(createTodoDto: CreateTodoDto) {
    const { title, description } = createTodoDto;
    const newTodo = {
      id: this.todos.length + 1,
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  updateTodo(id: number, updateData: UpdateTodoDto) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) throw new Error('Todo not found');

    Object.assign(todo, updateData); // обновляет только переданные поля
    todo.updatedAt = new Date();
    return todo;
  }

  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) return false;

    this.todos.splice(index, 1);
    return true;
  }

  updateTodoStatus(
    id: number,
    status: 'pending' | 'in-progress' | 'completed',
  ) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) throw new Error('Todo not found');

    todo.status = status;
    if (status === 'completed') {
      todo.completed = true;
      todo.completedAt = new Date();
    } else {
      todo.completed = false;
      todo.completedAt = undefined;
    }
    todo.updatedAt = new Date();
    return todo;
  }
}
