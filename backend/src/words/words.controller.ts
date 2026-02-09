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
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.wordsService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: FindWordsQueryDto,
  ) {
    const { type, level, skip, take, cursor } = query;

    return this.wordsService.findAll({
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
  create(@Body() data: CreateWordDto) {
    return this.wordsService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateWordDto,
  ) {
    return this.wordsService.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.wordsService.remove({ id });
  }
}
