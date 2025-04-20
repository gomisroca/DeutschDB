// Modules
import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { GrammarModule } from './grammar/grammar.module';
import { PhrasesModule } from './phrases/phrases.module';
import { PracticeModule } from './practice/practice.module';
import { VerbsModule } from './verbs/verbs.module';
import { WordsModule } from './words/words.module';
// Controllers
import { AppController } from './app.controller';
import { GrammarController } from './grammar/grammar.controller';
import { PhrasesController } from './phrases/phrases.controller';
import { PracticeController } from './practice/practice.controller';
import { VerbsController } from './verbs/verbs.controller';
import { WordsController } from './words/words.controller';
// Services
import { AppService } from './app.service';
import { GrammarService } from './grammar/grammar.service';
import { PhrasesService } from './phrases/phrases.service';
import { PracticeService } from './practice/practice.service';
import { VerbsService } from './verbs/verbs.service';
import { WordsService } from './words/words.service';

@Module({
  imports: [
    HealthModule,
    PrismaModule,
    GrammarModule,
    PhrasesModule,
    PracticeModule,
    VerbsModule,
    WordsModule,
  ],
  controllers: [
    AppController,
    GrammarController,
    PhrasesController,
    PracticeController,
    VerbsController,
    WordsController,
  ],
  providers: [
    AppService,
    GrammarService,
    PhrasesService,
    PracticeService,
    VerbsService,
    WordsService,
  ],
})
export class AppModule {}
