import { Controller, Get, Query } from '@nestjs/common';
import { ConjugationsService } from './conjugations.service';
import {
  CreateConjugationDto,
  FindConjugationsQueryDto,
  UpdateConjugationDto,
} from './conjugations.dto';
import { BaseController } from 'src/base/base.controller';
import { VerbConjugation } from '@generated/prisma/client';

@Controller('conjugations')
export class ConjugationsController extends BaseController<
  VerbConjugation,
  CreateConjugationDto,
  UpdateConjugationDto,
  FindConjugationsQueryDto,
  ConjugationsService
> {
  constructor(service: ConjugationsService) {
    super(service);
  }

  @Get()
  override findAll(@Query() query: FindConjugationsQueryDto) {
    return super.findAll(query);
  }

  @Get('paginated')
  override findPaginated(@Query() query: FindConjugationsQueryDto) {
    return super.findPaginated(query);
  }
}
