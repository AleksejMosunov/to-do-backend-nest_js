import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ], // others modules if needed
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // if we want to use the service in other modules
})
export class UsersModule {}
