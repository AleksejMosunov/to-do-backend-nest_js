import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DeleteTodoDto {
  @ApiProperty({ description: 'ID of the todo item to delete' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'ID of the user performing the deletion' })
  @IsNumber()
  user: number;
}
