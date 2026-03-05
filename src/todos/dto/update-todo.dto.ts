// src/todo/dto/create-todo.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsDate,
} from 'class-validator';

export class UpdateTodoDto {
  @ApiPropertyOptional({ description: 'Updated title of the todo item' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ description: 'Updated description of the todo item' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({
    description: 'Updated completion status of the todo item',
  })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @ApiPropertyOptional({ description: 'Updated status of the todo item' })
  @IsOptional()
  @IsDate()
  status?: 'pending' | 'in-progress' | 'completed';
}
