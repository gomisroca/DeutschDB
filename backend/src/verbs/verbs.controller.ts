import { Controller, Get, Query } from '@nestjs/common';
import { VerbsService } from './verbs.service';
import { CreateVerbDto, FindVerbsQueryDto, UpdateVerbDto } from './verbs.dto';
import { BaseController } from 'src/base/base.controller';
import { Verb } from '@generated/prisma/client';

@Controller('verbs')
export class VerbsController extends BaseController<
  Verb,
  CreateVerbDto,
  UpdateVerbDto,
  FindVerbsQueryDto,
  VerbsService
> {
  constructor(service: VerbsService) {
    super(service);
  }

  @Get()
  override findAll(@Query() query: FindVerbsQueryDto) {
    return super.findAll(query);
  }

  @Get('paginated')
  override findPaginated(@Query() query: FindVerbsQueryDto) {
    return super.findPaginated(query);
  }
}
