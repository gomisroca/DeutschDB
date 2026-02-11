import { Injectable } from '@nestjs/common';
import { GrammarTopic, Prisma } from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/base/base.service';
import { FindGrammarQueryDto } from './grammar.dto';

@Injectable()
export class GrammarService extends BaseService<
  GrammarTopic,
  Prisma.GrammarTopicFindManyArgs,
  Prisma.GrammarTopicWhereUniqueInput,
  Prisma.GrammarTopicCreateInput,
  Prisma.GrammarTopicUpdateArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma.grammarTopic);
  }

  async findOne(
    where: Prisma.GrammarTopicWhereUniqueInput,
  ): Promise<GrammarTopic> {
    return await super.findOne(where);
  }

  async findAll(queryDto: FindGrammarQueryDto) {
    return super.findAll({
      take: queryDto.take,
      skip: queryDto.skip,
      cursor: queryDto.cursor,
      includeTotal: true,
      query: {
        where: {
          ...(queryDto.level && { level: queryDto.level }),
        },
        orderBy: { id: 'asc' },
      },
    });
  }

  async create(data: Prisma.GrammarTopicCreateInput): Promise<GrammarTopic> {
    return await super.create(data);
  }

  async update(params: Prisma.GrammarTopicUpdateArgs): Promise<GrammarTopic> {
    return await super.update(params);
  }

  async remove(where: Prisma.GrammarTopicWhereUniqueInput): Promise<void> {
    return await super.remove(where);
  }
}
