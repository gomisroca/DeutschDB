import { Injectable } from '@nestjs/common';
import { Prisma, Word } from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindWordsQueryDto } from './words.dto';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class WordsService extends BaseService<
  Word,
  Prisma.WordFindManyArgs,
  Prisma.WordWhereUniqueInput,
  Prisma.WordCreateInput,
  Prisma.WordUpdateArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma.word);
  }

  async findOne(where: Prisma.WordWhereUniqueInput): Promise<Word> {
    return await super.findOne(where);
  }

  async findAll(queryDto: FindWordsQueryDto) {
    return super.findAll({
      take: queryDto.take,
      skip: queryDto.skip,
      cursor: queryDto.cursor,
      includeTotal: true,
      query: {
        where: {
          ...(queryDto.type && { type: queryDto.type }),
          ...(queryDto.level && { level: queryDto.level }),
        },
        orderBy: { id: 'asc' },
      },
    });
  }

  async create(data: Prisma.WordCreateInput): Promise<Word> {
    return await super.create(data);
  }

  async update(params: Prisma.WordUpdateArgs): Promise<Word> {
    return await super.update(params);
  }

  async remove(where: Prisma.WordWhereUniqueInput): Promise<void> {
    return await super.remove(where);
  }
}
