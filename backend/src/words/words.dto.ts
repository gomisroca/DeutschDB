import {
  IsEnum,
  IsOptional,
  IsString,
  IsArray,
  IsInt,
  Min,
} from 'class-validator';
import { Gender, Level, WordType } from '@generated/prisma/client';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class FindWordsQueryDto {
  @IsOptional()
  @IsEnum(WordType)
  type?: WordType;

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

export class CreateWordDto {
  @IsString()
  word: string;

  @IsEnum(WordType)
  type: WordType;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsString()
  plural?: string;

  @IsEnum(Level)
  level: Level;

  @IsString()
  definition: string;

  @IsString()
  translation: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  examples?: string[];
}

export class UpdateWordDto extends PartialType(CreateWordDto) {}
