import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CraftingMacrosService } from './crafting-macros.service';
import { CraftingMacro } from '@prisma/client';

@Controller('crafting-macros')
export class CraftingMacrosController {
  constructor(private readonly craftingMacrosService: CraftingMacrosService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CraftingMacro | null> {
    return this.craftingMacrosService.findOne({ id });
  }

  @Get()
  findAll(): Promise<CraftingMacro[]> {
    return this.craftingMacrosService.findAll({});
  }

  @Post()
  create(
    @Body() data: { name: string; description: string; patch: string },
  ): Promise<CraftingMacro> {
    return this.craftingMacrosService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: { name?: string; description?: string; patch?: string },
  ): Promise<CraftingMacro> {
    return this.craftingMacrosService.update({ where: { id }, data });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.craftingMacrosService.remove({ id });
  }
}
