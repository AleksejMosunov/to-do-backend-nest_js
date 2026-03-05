import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  // @ApiProperty({ description: 'Unique identifier of the user' })
  // id: number;

  @ApiProperty({ description: 'Name of the user' })
  name: string;

  @ApiProperty({ description: 'Email of the user' })
  email: string;

  @ApiProperty({ description: 'Password of the user' })
  password: string;

  @ApiProperty({ description: 'Role of the user', enum: ['admin', 'user'] })
  role: 'admin' | 'user';

  @ApiPropertyOptional({ description: 'Date when the user was created' })
  createdAt?: Date;

  @ApiPropertyOptional({ description: 'Date when the user was last updated' })
  updatedAt?: Date;
}
