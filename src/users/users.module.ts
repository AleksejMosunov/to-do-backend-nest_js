import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [], // others modules if needed
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
