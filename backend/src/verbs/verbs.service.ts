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
    cursor?: Prisma.VerbWhereUniqueInput;
    where?: Prisma.VerbWhereInput;
    orderBy?: Prisma.VerbOrderByWithRelationInput;
  }): Promise<Verb[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.verb.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
        include: {
          conjugations: true,
        },
      });
    } catch {
      throw new NotFoundException('No verbs found by given parameters');
    }
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

      const existingConjugation = await this.prisma.verbConjugation.findUnique({
        where: {
          verbId_tense_mood: {
            verbId: verbId!,
            tense: data.tense,
            mood: data.mood,
          },
        },
      });
      if (existingConjugation) throw new Error('Verb already exists');

      return this.prisma.verbConjugation.create({
        data: {
          verbId: verbId!,
          tense: data.tense,
          mood: data.mood,
          forms: data.forms,
        },
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
