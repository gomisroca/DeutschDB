import { Module } from '@nestjs/common';
import { CraftingMacrosService } from './crafting-macros.service';
import { CraftingMacrosController } from './crafting-macros.controller';

@Module({
  controllers: [CraftingMacrosController],
  providers: [CraftingMacrosService],
})
export class CraftingMacrosModule {}
