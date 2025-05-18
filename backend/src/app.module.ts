// Modules
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { GrammarModule } from './grammar/grammar.module';
import { PhrasesModule } from './phrases/phrases.module';
import { VerbsModule } from './verbs/verbs.module';
import { WordsModule } from './words/words.module';
import { PracticeModule } from './practice/practice.module';
// Controller
import { AppController } from './app.controller';
// Service
import { AppService } from './app.service';

@Module({
  imports: [
    HealthModule,
    PrismaModule,
    GrammarModule,
    PhrasesModule,
    VerbsModule,
    WordsModule,
    PracticeModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
