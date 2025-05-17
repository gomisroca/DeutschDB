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
import { GrammarService } from './grammar.service';
import { GrammarTopic, Level, Prisma } from '@prisma/client';

@Controller('grammar')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GrammarTopic> {
    return this.grammarService.findOne({ id });
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
  ): Promise<GrammarTopic[]> {
    const { level, skip, take, cursor } = query;

    const where: Prisma.GrammarTopicWhereInput = {};
    if (level) where.level = level as Level;

    const topics = await this.grammarService.findAll({
      where,
      skip: skip ? parseInt(skip, 10) : undefined,
      take: take ? parseInt(take, 10) : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { id: 'asc' },
    });

    return topics;
  }

  @Post()
  create(
    @Body()
    data: Prisma.GrammarTopicCreateInput,
  ): Promise<GrammarTopic> {
    return this.grammarService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    data: Prisma.GrammarTopicUpdateInput,
  ): Promise<GrammarTopic> {
    return this.grammarService.update({ where: { id }, data });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.grammarService.remove({ id });
  }
}
