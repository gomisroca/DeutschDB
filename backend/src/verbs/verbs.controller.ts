import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { VerbsService } from './verbs.service';
import { Prisma, VerbConjugation, VerbMood, VerbTense } from '@prisma/client';

@Controller('verbs')
export class VerbsController {
  constructor(private readonly verbsService: VerbsService) {}

  @Get(':verb')
  findOne(
    @Param() verb: string,
    @Query()
    query: {
      tense?: string;
      mood?: string;
    },
  ): Promise<VerbConjugation | null> {
    const { tense, mood } = query;
    const where: Prisma.VerbConjugationWhereInput = {
      verb: {
        equals: verb,
        mode: 'insensitive',
      },
    };
    if (tense)
      where.tense = {
        equals: tense.toLowerCase() as VerbTense,
      };
    if (mood)
      where.mood = {
        equals: mood.toLowerCase() as VerbMood,
      };
    return this.verbsService.findOne(where);
  }

  @Get()
  findAll(
    @Query()
    query: {
      skip?: string;
      take?: string;
      cursor?: string;
    },
  ): Promise<VerbConjugation[]> {
    const { skip, take, cursor } = query;

    return this.verbsService.findAll({
      skip: skip ? parseInt(skip, 10) : undefined,
      take: take ? parseInt(take, 10) : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { id: 'asc' },
    });
  }

  @Post()
  create(
    @Body()
    data: {
      verb: string;
      tense: VerbTense;
      mood: VerbMood;
      forms: string[];
    },
  ): Promise<VerbConjugation> {
    return this.verbsService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    data: {
      verb?: string;
      tense?: VerbTense;
      mood?: VerbMood;
      forms?: string[];
    },
  ): Promise<VerbConjugation> {
    return this.verbsService.update({ where: { id }, data });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.verbsService.remove({ id });
  }
}
