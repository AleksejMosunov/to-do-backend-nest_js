import { ApiProperty } from '@nestjs/swagger';

export class updateUserDto {
  @ApiProperty({ description: 'Name of the user', required: false })
  name?: string;

  @ApiProperty({ description: 'Email of the user', required: false })
  email?: string;

  @ApiProperty({ description: 'Password of the user', required: false })
  password?: string;

  @ApiProperty({
    description: 'Role of the user',
    required: false,
    enum: ['admin', 'user'],
  })
  role?: 'admin' | 'user';

  @ApiProperty({
    description: 'Date when the user was last updated',
    required: false,
  })
  updatedAt?: Date;
}
