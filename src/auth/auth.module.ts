import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule, // чтобы AuthService мог использовать UsersService
    JwtModule.register({
      secret: 'secretKey', // лучше в .env
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController], // контроллеры Auth
  providers: [AuthService], // провайдеры Auth
  exports: [AuthService], // если другой модуль будет использовать AuthService
})
export class AuthModule {}
