import { Controller } from '@nestjs/common';
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
}
