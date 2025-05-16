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
import { Verb, VerbConjugation, VerbMood, VerbTense } from '@prisma/client';

@Controller('verbs')
export class VerbsController {
  constructor(private readonly verbsService: VerbsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<VerbConjugation> {
    return this.verbsService.findOne({ id });
  }

  @Get()
  findAll(
    @Query()
    query: {
      skip?: string;
      take?: string;
      cursor?: string;
    },
  ): Promise<Verb[]> {
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
      verbName: string;
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
