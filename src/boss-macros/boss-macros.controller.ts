import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BossMacrosService } from './boss-macros.service';
import { Prisma } from '@prisma/client';

@Controller('boss-macros')
export class BossMacrosController {
  constructor(private readonly bossMacrosService: BossMacrosService) {}

  @Post()
  create(@Body() data: Prisma.BossMacroCreateInput) {
    return this.bossMacrosService.create(data);
  }

  @Get()
  findAll() {
    return this.bossMacrosService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') where: Prisma.BossMacroWhereUniqueInput) {
    return this.bossMacrosService.findOne(where);
  }

  @Patch(':id')
  update(
    @Param('id') where: Prisma.BossMacroWhereUniqueInput,
    @Body() data: Prisma.BossMacroUpdateInput,
  ) {
    return this.bossMacrosService.update({ where, data });
  }

  @Delete(':id')
  remove(@Param('id') where: Prisma.BossMacroWhereUniqueInput) {
    return this.bossMacrosService.remove(where);
  }
}
