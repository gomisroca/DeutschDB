import { Injectable } from '@nestjs/common';
import { Prisma, VerbConjugation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VerbsService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    where: Prisma.VerbConjugationWhereInput,
  ): Promise<VerbConjugation | null> {
    return this.prisma.verbConjugation.findFirst({
      where,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VerbConjugationWhereUniqueInput;
    where?: Prisma.VerbConjugationWhereInput;
    orderBy?: Prisma.VerbConjugationOrderByWithRelationInput;
  }): Promise<VerbConjugation[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.verbConjugation.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(
    data: Prisma.VerbConjugationCreateInput,
  ): Promise<VerbConjugation> {
    return this.prisma.verbConjugation.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.VerbConjugationWhereUniqueInput;
    data: Prisma.VerbConjugationUpdateInput;
  }): Promise<VerbConjugation> {
    const { where, data } = params;
    return this.prisma.verbConjugation.update({
      where,
      data,
    });
  }

  async remove(where: Prisma.VerbConjugationWhereUniqueInput): Promise<void> {
    await this.prisma.verbConjugation.delete({
      where,
    });
  }
}
