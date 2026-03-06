// src/todo/dto/create-todo.dto.ts
import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ description: 'Title of the todo item' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ description: 'Description of the todo item' })
  @IsString()
  @IsNotEmpty()
  description?: string;

  @ApiProperty({ description: 'Author ID of the todo item' })
  @IsString()
  authorId: string;
}
