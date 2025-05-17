import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GrammarTopic, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GrammarService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    where: Prisma.GrammarTopicWhereUniqueInput,
  ): Promise<GrammarTopic> {
    try {
      return await this.prisma.grammarTopic.findUniqueOrThrow({
        where,
      });
    } catch {
      throw new NotFoundException('Grammar topic by given ID does not exist');
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.GrammarTopicWhereUniqueInput;
    where?: Prisma.GrammarTopicWhereInput;
    orderBy?: Prisma.GrammarTopicOrderByWithRelationInput;
  }): Promise<GrammarTopic[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.grammarTopic.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch {
      throw new NotFoundException(
        'No grammar topics found by given parameters',
      );
    }
  }

  async create(data: Prisma.GrammarTopicCreateInput): Promise<GrammarTopic> {
    try {
      const existingTopic = await this.prisma.grammarTopic.findFirst({
        where: {
          title: data.title,
        },
      });
      if (existingTopic) throw new Error('Grammar topic already exists');

      return this.prisma.grammarTopic.create({
        data,
      });
    } catch {
      throw new ConflictException('Grammar topic already exists');
    }
  }

  async update(params: {
    where: Prisma.GrammarTopicWhereUniqueInput;
    data: Prisma.GrammarTopicUpdateInput;
  }): Promise<GrammarTopic> {
    try {
      const { where, data } = params;

      await this.prisma.grammarTopic.findUniqueOrThrow({
        where,
      });

      return this.prisma.grammarTopic.update({
        where,
        data,
      });
    } catch {
      throw new NotFoundException('Grammar topic by given ID does not exist');
    }
  }

  async remove(where: Prisma.GrammarTopicWhereUniqueInput): Promise<void> {
    try {
      await this.prisma.grammarTopic.findUniqueOrThrow({
        where,
      });

      await this.prisma.grammarTopic.delete({
        where,
      });

      return Promise.resolve();
    } catch {
      throw new NotFoundException('Grammar topic by given ID does not exist');
    }
  }
}
