import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser(name: string, password: string) {
    const user = this.usersService.findByUsername(name);
    if (!user) return null;

    if (password === user.password) return user;

    return null;
  }

  login(name: string, password: string) {
    const user = this.validateUser(name, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { name: user.name, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
