import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { VerbsService } from './verbs.service';
import { CreateVerbDto, FindVerbsQueryDto, UpdateVerbDto } from './verbs.dto';

@Controller('verbs')
export class VerbsController {
  constructor(private readonly verbsService: VerbsService) {}

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.verbsService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: FindVerbsQueryDto,
  ) {
    const { skip, take, cursor } = query;

    return this.verbsService.findAll({
      skip,
      take,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { id: 'asc' },
    });
  }

  @Post()
  create(
    @Body()
    data: CreateVerbDto,
  ) {
    return this.verbsService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateVerbDto,
  ) {
    return this.verbsService.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.verbsService.remove({ id });
  }
}
