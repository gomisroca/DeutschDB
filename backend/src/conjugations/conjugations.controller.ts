import { Controller } from '@nestjs/common';
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
}
