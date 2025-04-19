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
import { BossMacro } from '@prisma/client';

@Controller('boss-macros')
export class BossMacrosController {
  constructor(private readonly bossMacrosService: BossMacrosService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BossMacro | null> {
    return this.bossMacrosService.findOne({ id });
  }

  @Get()
  findAll(): Promise<BossMacro[]> {
    return this.bossMacrosService.findAll({});
  }

  @Post()
  create(
    @Body()
    data: {
      name: string;
      description: string;
      patch: string;
      series: string;
      boss: string;
    },
  ): Promise<BossMacro> {
    return this.bossMacrosService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    data: {
      name?: string;
      description?: string;
      patch?: string;
      series?: string;
      boss?: string;
    },
  ): Promise<BossMacro> {
    return this.bossMacrosService.update({ where: { id }, data });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.bossMacrosService.remove({ id });
  }
}
