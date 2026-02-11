import { Injectable } from '@nestjs/common';
import { Prisma, Verb } from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/base/base.service';
import { FindVerbsQueryDto } from './verbs.dto';

@Injectable()
export class VerbsService extends BaseService<
  Verb,
  Prisma.VerbFindManyArgs,
  Prisma.VerbWhereUniqueInput,
  Prisma.VerbCreateInput,
  Prisma.VerbUpdateArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma.verb);
  }

  async findOne(where: Prisma.VerbWhereUniqueInput): Promise<Verb> {
    return await super.findOne(where);
  }

  async findAll(queryDto: FindVerbsQueryDto) {
    return super.findAll({
      take: queryDto.take,
      skip: queryDto.skip,
      cursor: queryDto.cursor,
      includeTotal: true,
      query: {
        orderBy: { id: 'asc' },
      },
    });
  }

  async create(data: Prisma.VerbCreateInput): Promise<Verb> {
    return await super.create(data);
  }

  async update(params: Prisma.VerbUpdateArgs): Promise<Verb> {
    return await super.update(params);
  }

  async remove(where: Prisma.VerbWhereUniqueInput): Promise<void> {
    return await super.remove(where);
  }
}
