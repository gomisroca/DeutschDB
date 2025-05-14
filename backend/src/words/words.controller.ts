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
import { WordsService } from './words.service';
import { Gender, Level, Prisma, Word, WordType } from '@prisma/client';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Word> {
    return this.wordsService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: {
      type?: string;
      level?: string;
      skip?: string;
      take?: string;
      cursor?: string;
    },
  ): Promise<Word[]> {
    const { type, level, skip, take, cursor } = query;

    const where: Prisma.WordWhereInput = {};
    if (type) where.type = type as WordType;
    if (level) where.level = level as Level;

    const words = await this.wordsService.findAll({
      where,
      skip: skip ? parseInt(skip, 10) : undefined,
      take: take ? parseInt(take, 10) : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { id: 'asc' },
    });

    return words;
  }

  @Post()
  create(
    @Body()
    data: {
      word: string;
      type: WordType;
      gender?: Gender;
      plural?: string;
      level: Level;
      definition: string;
      examples?: string[];
    },
  ): Promise<Word> {
    return this.wordsService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    data: {
      word?: string;
      type?: WordType;
      gender?: Gender;
      plural?: string;
      level?: Level;
      definition?: string;
      examples?: string[];
    },
  ): Promise<Word> {
    return this.wordsService.update({ where: { id }, data });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.wordsService.remove({ id });
  }
}
