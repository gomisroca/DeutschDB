import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, VerbConjugation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VerbsService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    where: Prisma.VerbConjugationWhereUniqueInput,
  ): Promise<VerbConjugation> {
    try {
      return this.prisma.verbConjugation.findUniqueOrThrow({
        where,
      });
    } catch {
      throw new NotFoundException('Verb by given ID does not exist');
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VerbConjugationWhereUniqueInput;
    where?: Prisma.VerbConjugationWhereInput;
    orderBy?: Prisma.VerbConjugationOrderByWithRelationInput;
  }): Promise<VerbConjugation[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.verbConjugation.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch {
      throw new NotFoundException('No verbs found by given parameters');
    }
  }

  async create(
    data: Prisma.VerbConjugationCreateInput,
  ): Promise<VerbConjugation> {
    try {
      const existingVerb = await this.prisma.verbConjugation.findFirst({
        where: {
          verb: data.verb,
        },
      });
      if (existingVerb) throw new Error('Verb already exists');

      return this.prisma.verbConjugation.create({
        data,
      });
    } catch {
      throw new ConflictException('Verb already exists');
    }
  }

  async update(params: {
    where: Prisma.VerbConjugationWhereUniqueInput;
    data: Prisma.VerbConjugationUpdateInput;
  }): Promise<VerbConjugation> {
    try {
      const { where, data } = params;

      await this.prisma.verbConjugation.findUniqueOrThrow({
        where,
      });

      return this.prisma.verbConjugation.update({
        where,
        data,
      });
    } catch {
      throw new NotFoundException('Verb by given ID does not exist');
    }
  }

  async remove(where: Prisma.VerbConjugationWhereUniqueInput): Promise<void> {
    try {
      await this.prisma.verbConjugation.findUniqueOrThrow({
        where,
      });

      await this.prisma.verbConjugation.delete({
        where,
      });

      return Promise.resolve();
    } catch {
      throw new NotFoundException('Verb by given ID does not exist');
    }
  }
}
