import { Controller, Get, Param } from '@nestjs/common';
import { PracticeService } from './practice.service';
import { GrammarTopic, Phrase, Verb, Word } from '@prisma/client';

type PracticeItem =
  | (Word & { type: 'word' })
  | (Verb & { type: 'verb' })
  | (GrammarTopic & { type: 'grammar' })
  | (Phrase & { type: 'phrase' });

@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  @Get(':type')
  findRandom(
    @Param('type') type: 'word' | 'verb' | 'grammar' | 'phrase',
  ): Promise<PracticeItem> {
    switch (type) {
      case 'word':
        return this.practiceService.findRandomWord();
      case 'verb':
        return this.practiceService.findRandomVerb();
      case 'grammar':
        return this.practiceService.findRandomGrammar();
      case 'phrase':
        return this.practiceService.findRandomPhrase();
      default:
        return this.practiceService.findRandomWord();
    }
  }

  @Get()
  findAnyRandom(): Promise<Word | Verb | GrammarTopic | Phrase> {
    const types = ['word', 'verb', 'grammar', 'phrase'] as const;

    const randomizedType = types[Math.floor(Math.random() * types.length)];

    switch (randomizedType) {
      case 'word':
        return this.practiceService.findRandomWord();
      case 'verb':
        return this.practiceService.findRandomVerb();
      case 'grammar':
        return this.practiceService.findRandomGrammar();
      case 'phrase':
        return this.practiceService.findRandomPhrase();
      default:
        return this.practiceService.findRandomWord();
    }
  }
}
