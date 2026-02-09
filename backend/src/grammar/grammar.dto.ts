import {
  IsEnum,
  IsOptional,
  IsString,
  IsArray,
  IsInt,
  Min,
} from 'class-validator';
import { Level } from '@generated/prisma/client';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class FindGrammarQueryDto {
  @IsOptional()
  @IsEnum(Level)
  level?: Level;

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

export class CreateGrammarDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsEnum(Level)
  level: Level;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  examples?: string[];
}

export class UpdateGrammarDto extends PartialType(CreateGrammarDto) {}
