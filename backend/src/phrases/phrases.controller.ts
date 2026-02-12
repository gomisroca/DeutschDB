import { Controller, Get, Query } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import {
  CreatePhraseDto,
  FindPhrasesQueryDto,
  UpdatePhraseDto,
} from './phrases.dto';
import { Phrase } from '@generated/prisma/client';
import { BaseController } from 'src/base/base.controller';

@Controller('phrases')
export class PhrasesController extends BaseController<
  Phrase,
  CreatePhraseDto,
  UpdatePhraseDto,
  FindPhrasesQueryDto,
  PhrasesService
> {
  constructor(service: PhrasesService) {
    super(service);
  }

  @Get()
  override findAll(@Query() query: FindPhrasesQueryDto) {
    return super.findAll(query);
  }

  @Get('paginated')
  override findPaginated(@Query() query: FindPhrasesQueryDto) {
    return super.findPaginated(query);
  }
}
