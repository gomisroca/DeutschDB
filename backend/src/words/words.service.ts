import { Injectable } from '@nestjs/common';
import { Prisma, Word } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.WordWhereUniqueInput): Promise<Word | null> {
    return this.prisma.word.findUnique({
      where,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.WordWhereUniqueInput;
    where?: Prisma.WordWhereInput;
    orderBy?: Prisma.WordOrderByWithRelationInput;
  }): Promise<Word[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.word.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.WordCreateInput): Promise<Word> {
    return this.prisma.word.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.WordWhereUniqueInput;
    data: Prisma.WordUpdateInput;
  }): Promise<Word> {
    const { where, data } = params;
    return this.prisma.word.update({
      where,
      data,
    });
  }

  async remove(where: Prisma.WordWhereUniqueInput): Promise<void> {
    await this.prisma.word.delete({
      where,
    });
  }
}
