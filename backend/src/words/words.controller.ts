import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { WordsService } from './words.service';
import { CreateWordDto, FindWordsQueryDto, UpdateWordDto } from './words.dto';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.wordsService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: FindWordsQueryDto,
  ) {
    const { type, level, skip, take, cursor } = query;

    return await this.wordsService.findAll({
      where: {
        ...(type && { type }),
        ...(level && { level }),
      },
      skip,
      take,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { id: 'asc' },
    });
  }

  @Post()
  async create(@Body() data: CreateWordDto) {
    return await this.wordsService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateWordDto,
  ) {
    return await this.wordsService.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.wordsService.remove({ id });
  }
}
