import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Word } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.WordWhereUniqueInput): Promise<Word> {
    try {
      return await this.prisma.word.findUniqueOrThrow({
        where,
      });
    } catch {
      throw new NotFoundException('Word by given ID does not exist');
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.WordWhereUniqueInput;
    where?: Prisma.WordWhereInput;
    orderBy?: Prisma.WordOrderByWithRelationInput;
  }): Promise<Word[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.word.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch {
      throw new NotFoundException('No words found by given parameters');
    }
  }

  async create(data: Prisma.WordCreateInput): Promise<Word> {
    try {
      const existingWord = await this.prisma.word.findFirst({
        where: {
          word: data.word,
        },
      });
      if (existingWord) throw new Error('Word already exists');

      return this.prisma.word.create({
        data,
      });
    } catch {
      throw new ConflictException('Word already exists');
    }
  }

  async update(params: {
    where: Prisma.WordWhereUniqueInput;
    data: Prisma.WordUpdateInput;
  }): Promise<Word> {
    try {
      const { where, data } = params;

      await this.prisma.word.findUniqueOrThrow({
        where,
      });

      return this.prisma.word.update({
        where,
        data,
      });
    } catch {
      throw new NotFoundException('Word by given ID does not exist');
    }
  }

  async remove(where: Prisma.WordWhereUniqueInput): Promise<void> {
    try {
      await this.prisma.word.findUniqueOrThrow({
        where,
      });

      await this.prisma.word.delete({
        where,
      });
    } catch {
      throw new NotFoundException('Word by given ID does not exist');
    }
  }
}
