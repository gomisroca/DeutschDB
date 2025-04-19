import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BossMacro, Prisma } from '@prisma/client';

@Injectable()
export class BossMacrosService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    where: Prisma.BossMacroWhereUniqueInput,
  ): Promise<BossMacro | null> {
    return this.prisma.bossMacro.findUnique({
      where,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BossMacroWhereUniqueInput;
    where?: Prisma.BossMacroWhereInput;
    orderBy?: Prisma.BossMacroOrderByWithRelationInput;
  }): Promise<BossMacro[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.bossMacro.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.BossMacroCreateInput): Promise<BossMacro> {
    return this.prisma.bossMacro.create({ data });
  }

  async update(params: {
    where: Prisma.BossMacroWhereUniqueInput;
    data: Prisma.BossMacroUpdateInput;
  }): Promise<BossMacro> {
    const { where, data } = params;
    return this.prisma.bossMacro.update({
      where,
      data,
    });
  }

  async remove(where: Prisma.BossMacroWhereUniqueInput): Promise<void> {
    await this.prisma.bossMacro.delete({ where });
  }
}
