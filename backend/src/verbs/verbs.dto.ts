import { IsOptional, IsString, IsInt, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class FindVerbsQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  skip?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  take?: number;

  @IsOptional()
  cursor?: string;
}

export class CreateVerbDto {
  @IsString()
  name: string;
}

export class UpdateVerbDto extends PartialType(CreateVerbDto) {}
