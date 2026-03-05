import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'secretKey', // лучше хранить в env
      signOptions: { expiresIn: '1h' },
    }),
  ], // others modules if needed
  controllers: [], // controllers for handling requests (HTTP endpoints)
})
export class AuthModule {}
