import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [], // others modules if needed
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // if we want to use the service in other modules
})
export class UsersModule {}
