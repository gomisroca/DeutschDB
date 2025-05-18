import { Injectable, NotFoundException } from '@nestjs/common';
import { GrammarTopic, Phrase, Verb, Word } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type PracticeItem =
  | (Word & { type: 'word' })
  | (Verb & { type: 'verb' })
  | (GrammarTopic & { type: 'grammar' })
  | (Phrase & { type: 'phrase' });

function withType<T, K extends string>(item: T, type: K): T & { type: K } {
  return { ...item, type };
}

@Injectable()
export class PracticeService {
  constructor(private prisma: PrismaService) {}

  // In the frontend the user will decice what to practice (words, verbs, grammar, etc.)
  async findRandomWord(): Promise<PracticeItem> {
    try {
      const count = await this.prisma.word.count();
      const randomIndex = Math.floor(Math.random() * count);

      const word = await this.prisma.word.findFirst({
        skip: randomIndex,
        take: 1,
      });
      if (!word) throw new NotFoundException('No word found');

      return withType(word, 'word');
    } catch {
      throw new NotFoundException('No word found');
    }
  }

  async findRandomVerb(): Promise<PracticeItem> {
    try {
      const count = await this.prisma.verb.count();
      const randomIndex = Math.floor(Math.random() * count);

      const verb = await this.prisma.verb.findFirst({
        skip: randomIndex,
        take: 1,
        include: { conjugations: true },
      });
      if (!verb) throw new NotFoundException('No verb found');

      return withType(verb, 'verb');
    } catch {
      throw new NotFoundException('No verb found');
    }
  }

  async findRandomGrammar(): Promise<PracticeItem> {
    try {
      const count = await this.prisma.grammarTopic.count();
      const randomIndex = Math.floor(Math.random() * count);

      const grammarTopic = await this.prisma.grammarTopic.findFirst({
        skip: randomIndex,
        take: 1,
      });
      if (!grammarTopic) throw new NotFoundException('No grammar topic found');

      return withType(grammarTopic, 'grammar');
    } catch {
      throw new NotFoundException('No grammar topic found');
    }
  }

  async findRandomPhrase(): Promise<PracticeItem> {
    try {
      const count = await this.prisma.phrase.count();
      const randomIndex = Math.floor(Math.random() * count);

      const phrase = await this.prisma.phrase.findFirst({
        skip: randomIndex,
        take: 1,
      });
      if (!phrase) throw new NotFoundException('No phrase found');

      return withType(phrase, 'phrase');
    } catch {
      throw new NotFoundException('No phrase found');
    }
  }
}
