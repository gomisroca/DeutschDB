import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GrammarTopic, Prisma } from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GrammarService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    where: Prisma.GrammarTopicWhereUniqueInput,
  ): Promise<GrammarTopic> {
    return await this.prisma.grammarTopic.findUniqueOrThrow({
      where,
    });
  }

  async findAll(
    params: Prisma.GrammarTopicFindManyArgs,
  ): Promise<GrammarTopic[]> {
    return await this.prisma.grammarTopic.findMany(params);
  }

  async create(data: Prisma.GrammarTopicCreateInput): Promise<GrammarTopic> {
    try {
      return await this.prisma.grammarTopic.create({ data });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Grammar topic already exists');
      }
      throw error;
    }
  }

  async update(params: Prisma.GrammarTopicUpdateArgs): Promise<GrammarTopic> {
    try {
      return await this.prisma.grammarTopic.update(params);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Grammar topic not found');
      }
      throw error;
    }
  }

  async remove(where: Prisma.GrammarTopicWhereUniqueInput): Promise<void> {
    try {
      await this.prisma.grammarTopic.delete({
        where,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Grammar topic not found');
      }
      throw error;
    }
  }
}
