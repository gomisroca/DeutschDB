import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Modules
import { HealthModule } from './health/health.module';
// Entities
import { BossMacrosModule } from './boss-macros/boss-macros.module';

@Module({
  imports: [HealthModule, BossMacrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
