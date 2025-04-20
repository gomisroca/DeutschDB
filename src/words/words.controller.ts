import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WordsService } from './words.service';
import { Word } from '@prisma/client';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Word | null> {
    return this.wordsService.findOne({ id });
  }

  @Get()
  findAll(): Promise<Word[]> {
    return this.wordsService.findAll({});
  }

  @Post()
  create(
    @Body()
    data: {
      word: string;
      type: string;
      gender?: string;
      plural?: string;
      level: string;
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
      type?: string;
      gender?: string;
      plural?: string;
      level?: string;
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
