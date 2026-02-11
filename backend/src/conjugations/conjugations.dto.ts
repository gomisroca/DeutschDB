import {
  IsEnum,
  IsOptional,
  IsString,
  IsArray,
  IsInt,
  Min,
} from 'class-validator';
import { VerbMood, VerbTense } from '@generated/prisma/client';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class FindConjugationsQueryDto {
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

export class CreateConjugationDto {
  @IsString()
  verbName: string;

  @IsEnum(VerbTense)
  tense: VerbTense;

  @IsEnum(VerbMood)
  mood: VerbMood;

  @IsArray()
  @IsString({ each: true })
  forms: string[];
}

export class UpdateConjugationDto extends PartialType(CreateConjugationDto) {}
