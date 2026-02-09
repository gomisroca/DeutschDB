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
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.verbsService.findOne({ id });
  }

  @Get()
  async findAll(
    @Query()
    query: FindVerbsQueryDto,
  ) {
    const { skip, take, cursor } = query;

    return await this.verbsService.findAll({
      skip,
      take,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: { id: 'asc' },
    });
  }

  @Post()
  async create(
    @Body()
    data: CreateVerbDto,
  ) {
    return await this.verbsService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateVerbDto,
  ) {
    return await this.verbsService.update({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.verbsService.remove({ id });
  }
}
