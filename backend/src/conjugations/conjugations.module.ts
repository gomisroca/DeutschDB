import { Module } from '@nestjs/common';
import { ConjugationsController } from './conjugations.controller';
import { ConjugationsService } from './conjugations.service';

@Module({
  controllers: [ConjugationsController],
  providers: [ConjugationsService],
})
export class ConjugationsModule {}
