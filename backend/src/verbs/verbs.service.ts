import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  Prisma,
  Verb,
  VerbConjugation,
  VerbMood,
  VerbTense,
} from '@generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VerbsService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    where: Prisma.VerbConjugationWhereUniqueInput,
  ): Promise<VerbConjugation> {
    return await this.prisma.verbConjugation.findUniqueOrThrow({
      where,
    });
  }

  async findAll(params: Prisma.VerbFindManyArgs): Promise<Verb[]> {
    return await this.prisma.verb.findMany(params);
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

      return await this.prisma.verbConjugation.create({
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
    try {
      return await this.prisma.verbConjugation.update(params);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Verb not found');
      }
      throw error;
    }
  }

  async remove(where: Prisma.VerbConjugationWhereUniqueInput): Promise<void> {
    try {
      await this.prisma.verbConjugation.delete({
        where,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Verb not found');
      }
      throw error;
    }
  }
}
