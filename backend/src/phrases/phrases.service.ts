import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Phrase, Prisma } from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhrasesService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.PhraseWhereUniqueInput): Promise<Phrase> {
    return await this.prisma.phrase.findUniqueOrThrow({
      where,
    });
  }

  async findAll(params: Prisma.PhraseFindManyArgs): Promise<Phrase[]> {
    return await this.prisma.phrase.findMany(params);
  }

  async create(data: Prisma.PhraseCreateInput): Promise<Phrase> {
    try {
      return await this.prisma.phrase.create({ data });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Phrase already exists');
      }
      throw error;
    }
  }

  async update(params: Prisma.PhraseUpdateArgs): Promise<Phrase> {
    try {
      return await this.prisma.phrase.update(params);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Phrase not found');
      }
      throw error;
    }
  }

  async remove(where: Prisma.PhraseWhereUniqueInput): Promise<void> {
    try {
      await this.prisma.phrase.delete({
        where,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Phrase not found');
      }
      throw error;
    }
  }
}
