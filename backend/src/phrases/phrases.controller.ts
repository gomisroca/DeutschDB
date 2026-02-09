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
import { PhrasesService } from './phrases.service';
import {
  CreatePhraseDto,
  FindPhrasesQueryDto,
  UpdatePhraseDto,
} from './phrases.dto';

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.phrasesService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: FindPhrasesQueryDto,
  ) {
    const { level, skip, take, cursor } = query;

    return await this.phrasesService.findAll({
      where: {
        ...(level && { level }),
      },
      skip,
      take,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { id: 'asc' },
    });
  }

  @Post()
  async create(@Body() data: CreatePhraseDto) {
    return await this.phrasesService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdatePhraseDto,
  ) {
    return await this.phrasesService.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.phrasesService.remove({ id });
  }
}
