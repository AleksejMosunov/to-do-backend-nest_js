import { IsOptional, IsBoolean, IsString } from 'class-validator';

export class GetTodosFilterDto {
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsString()
  search?: string;
}
