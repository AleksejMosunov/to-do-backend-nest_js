import { Injectable } from '@nestjs/common';
import User from './entities/User';
import { CreateUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/update.user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto) {
    const { name, email, password, role } = createUserDto;
    const newUser = {
      id: Date.now(), // простая генерация ID на основе текущего времени
      name,
      email,
      password,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: number, updateData: updateUserDto) {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new Error('User not found');

    Object.assign(user, updateData); // обновляет только переданные поля
    user.updatedAt = new Date();
    return user;
  }

  deleteUser(id: number): User | null {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return null;
    const deletedUser = this.users.splice(index, 1)[0];
    return deletedUser;
  }

  findByUsername(username: string): User | undefined {
    return this.users.find((user) => user.name === username);
  }
}
