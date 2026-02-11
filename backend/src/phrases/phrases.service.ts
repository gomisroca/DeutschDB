import { Injectable } from '@nestjs/common';
import { Phrase, Prisma } from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/base/base.service';
import { FindPhrasesQueryDto } from './phrases.dto';

@Injectable()
export class PhrasesService extends BaseService<
  Phrase,
  Prisma.PhraseFindManyArgs,
  Prisma.PhraseWhereUniqueInput,
  Prisma.PhraseCreateInput,
  Prisma.PhraseUpdateArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma.phrase);
  }

  async findOne(where: Prisma.PhraseWhereUniqueInput): Promise<Phrase> {
    return await super.findOne(where);
  }

  async findAll(queryDto: FindPhrasesQueryDto) {
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

  async create(data: Prisma.PhraseCreateInput): Promise<Phrase> {
    return await super.create(data);
  }

  async update(params: Prisma.PhraseUpdateArgs): Promise<Phrase> {
    return await super.update(params);
  }

  async remove(where: Prisma.PhraseWhereUniqueInput): Promise<void> {
    return await super.remove(where);
  }
}
