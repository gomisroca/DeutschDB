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
import { PhrasesService } from './phrases.service';
import { Level, Prisma, Phrase } from '@generated/prisma/client';

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Phrase> {
    return this.phrasesService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: {
      level?: string;
      skip?: string;
      take?: string;
      cursor?: string;
    },
  ): Promise<Phrase[]> {
    const { level, skip, take, cursor } = query;

    const where: Prisma.PhraseWhereInput = {};
    if (level) where.level = level as Level;

    const phrases = await this.phrasesService.findAll({
      where,
      skip: skip ? parseInt(skip, 10) : undefined,
      take: take ? parseInt(take, 10) : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { id: 'asc' },
    });

    return phrases;
  }

  @Post()
  create(
    @Body()
    data: {
      topic: string;
      level: Level;
      original: string;
      translation: string;
    },
  ): Promise<Phrase> {
    return this.phrasesService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    data: {
      topic?: string;
      level?: Level;
      original?: string;
      translation?: string;
    },
  ): Promise<Phrase> {
    return this.phrasesService.update({ where: { id }, data });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.phrasesService.remove({ id });
  }
}
