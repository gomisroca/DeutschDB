import { Module } from '@nestjs/common';
import { BossMacrosService } from './boss-macros.service';
import { BossMacrosController } from './boss-macros.controller';

@Module({
  controllers: [BossMacrosController],
  providers: [BossMacrosService],
})
export class BossMacrosModule {}
