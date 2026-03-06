import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'Name of the user' })
  name?: string;

  @ApiPropertyOptional({ description: 'Email of the user' })
  email?: string;

  @ApiPropertyOptional({ description: 'Password of the user' })
  password?: string;

  @ApiPropertyOptional({
    description: 'Role of the user',
    enum: ['admin', 'user'],
  })
  role?: 'admin' | 'user';
}
