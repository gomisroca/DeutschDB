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
import { GrammarService } from './grammar.service';
import {
  CreateGrammarDto,
  FindGrammarQueryDto,
  UpdateGrammarDto,
} from './grammar.dto';

@Controller('grammar')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.grammarService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: FindGrammarQueryDto,
  ) {
    const { level, skip, take, cursor } = query;

    return await this.grammarService.findAll({
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
  async create(@Body() data: CreateGrammarDto) {
    return await this.grammarService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateGrammarDto,
  ) {
    return await this.grammarService.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.grammarService.remove({ id });
  }
}
