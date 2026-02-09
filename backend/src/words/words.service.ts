import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Word } from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.WordWhereUniqueInput): Promise<Word> {
    return await this.prisma.word.findUniqueOrThrow({
      where,
    });
  }

  async findAll(params: Prisma.WordFindManyArgs): Promise<Word[]> {
    return this.prisma.word.findMany(params);
  }

  async create(data: Prisma.WordCreateInput): Promise<Word> {
    try {
      return await this.prisma.word.create({ data });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Word already exists');
      }
      throw error;
    }
  }

  async update(params: Prisma.WordUpdateArgs): Promise<Word> {
    try {
      return await this.prisma.word.update(params);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Word not found');
      }
      throw error;
    }
  }

  async remove(where: Prisma.WordWhereUniqueInput): Promise<void> {
    try {
      await this.prisma.word.delete({
        where,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Word not found');
      }
      throw error;
    }
  }
}
