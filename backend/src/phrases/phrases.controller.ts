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
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.phrasesService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: FindPhrasesQueryDto,
  ) {
    const { level, skip, take, cursor } = query;

    return this.phrasesService.findAll({
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
  create(@Body() data: CreatePhraseDto) {
    return this.phrasesService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdatePhraseDto,
  ) {
    return this.phrasesService.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.phrasesService.remove({ id });
  }
}
