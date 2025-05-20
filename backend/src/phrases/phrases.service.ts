import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Phrase, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhrasesService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.PhraseWhereUniqueInput): Promise<Phrase> {
    try {
      return await this.prisma.phrase.findUniqueOrThrow({
        where,
      });
    } catch {
      throw new NotFoundException('Phrase by given ID does not exist');
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PhraseWhereUniqueInput;
    where?: Prisma.PhraseWhereInput;
    orderBy?: Prisma.PhraseOrderByWithRelationInput;
  }): Promise<Phrase[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.phrase.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch {
      throw new NotFoundException('No phrases found by given parameters');
    }
  }

  async create(data: Prisma.PhraseCreateInput): Promise<Phrase> {
    try {
      const existingPhrase = await this.prisma.phrase.findFirst({
        where: {
          original: data.original,
        },
      });
      if (existingPhrase) throw new Error('Phrase already exists');

      return this.prisma.phrase.create({
        data,
      });
    } catch {
      throw new ConflictException('Phrase already exists');
    }
  }

  async update(params: {
    where: Prisma.PhraseWhereUniqueInput;
    data: Prisma.PhraseUpdateInput;
  }): Promise<Phrase> {
    try {
      const { where, data } = params;

      await this.prisma.phrase.findUniqueOrThrow({
        where,
      });

      return this.prisma.phrase.update({
        where,
        data,
      });
    } catch {
      throw new NotFoundException('Phrase by given ID does not exist');
    }
  }

  async remove(where: Prisma.PhraseWhereUniqueInput): Promise<void> {
    try {
      await this.prisma.phrase.findUniqueOrThrow({
        where,
      });

      await this.prisma.phrase.delete({
        where,
      });

      return Promise.resolve();
    } catch {
      throw new NotFoundException('Phrase by given ID does not exist');
    }
  }
}
