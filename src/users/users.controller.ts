import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: CreateUserDto) {
    return this.usersService.updateUser(Number(id), body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}
