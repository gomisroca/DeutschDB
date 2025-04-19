import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CraftingMacro, Prisma } from '@prisma/client';

@Injectable()
export class CraftingMacrosService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    where: Prisma.CraftingMacroWhereUniqueInput,
  ): Promise<CraftingMacro | null> {
    return this.prisma.craftingMacro.findUnique({
      where,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CraftingMacroWhereUniqueInput;
    where?: Prisma.CraftingMacroWhereInput;
    orderBy?: Prisma.CraftingMacroOrderByWithRelationInput;
  }): Promise<CraftingMacro[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.craftingMacro.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.CraftingMacroCreateInput): Promise<CraftingMacro> {
    return this.prisma.craftingMacro.create({ data });
  }

  async update(params: {
    where: Prisma.CraftingMacroWhereUniqueInput;
    data: Prisma.CraftingMacroUpdateInput;
  }): Promise<CraftingMacro> {
    const { where, data } = params;
    return this.prisma.craftingMacro.update({
      where,
      data,
    });
  }

  async remove(where: Prisma.CraftingMacroWhereUniqueInput): Promise<void> {
    await this.prisma.craftingMacro.delete({ where });
  }
}
