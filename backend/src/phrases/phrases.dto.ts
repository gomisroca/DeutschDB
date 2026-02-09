import { IsEnum, IsOptional, IsString, IsInt, Min } from 'class-validator';
import { Level } from '@generated/prisma/client';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class FindPhrasesQueryDto {
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

export class CreatePhraseDto {
  @IsString()
  topic: string;

  @IsEnum(Level)
  level: Level;

  @IsString()
  original: string;

  @IsString()
  translation: string;
}

export class UpdatePhraseDto extends PartialType(CreatePhraseDto) {}
