import { ConflictException, Injectable } from '@nestjs/common';
import {
  Prisma,
  VerbConjugation,
  VerbMood,
  VerbTense,
} from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/base/base.service';
import { FindConjugationsQueryDto } from './conjugations.dto';

@Injectable()
export class ConjugationsService extends BaseService<
  VerbConjugation,
  Prisma.VerbConjugationFindManyArgs,
  Prisma.VerbConjugationWhereUniqueInput,
  any,
  Prisma.VerbConjugationUpdateArgs
> {
  constructor(private prisma: PrismaService) {
    super(prisma.verbConjugation);
  }

  async findOne(
    where: Prisma.VerbConjugationWhereUniqueInput,
  ): Promise<VerbConjugation> {
    return await super.findOne(where);
  }

  async findAll(queryDto: FindConjugationsQueryDto) {
    return super.findAll({
      take: queryDto.take,
      skip: queryDto.skip,
      cursor: queryDto.cursor,
      includeTotal: true,
      query: {
        orderBy: { id: 'asc' },
      },
    });
  }

  async create(data: {
    verbName: string;
    tense: VerbTense;
    mood: VerbMood;
    forms: string[];
  }): Promise<VerbConjugation> {
    try {
      const existingVerb = await this.prisma.verb.findFirst({
        where: {
          verb: data.verbName,
        },
      });
      let verbId = existingVerb?.id;

      if (!existingVerb) {
        const newVerb = await this.prisma.verb.create({
          data: {
            verb: data.verbName,
          },
        });
        verbId = newVerb.id;
      }

      return await super.create({
        data: {
          verbId: verbId!,
          tense: data.tense,
          mood: data.mood,
          forms: data.forms,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Verb already exists');
      }
      throw error;
    }
  }

  async update(
    params: Prisma.VerbConjugationUpdateArgs,
  ): Promise<VerbConjugation> {
    return await super.update(params);
  }

  async remove(where: Prisma.VerbConjugationWhereUniqueInput): Promise<void> {
    return await super.remove(where);
  }
}
