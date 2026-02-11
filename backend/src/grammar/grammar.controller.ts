import { Controller } from '@nestjs/common';
import { GrammarService } from './grammar.service';
import {
  CreateGrammarDto,
  FindGrammarQueryDto,
  UpdateGrammarDto,
} from './grammar.dto';
import { BaseController } from 'src/base/base.controller';
import { GrammarTopic } from '@generated/prisma/client';

@Controller('grammar')
export class GrammarController extends BaseController<
  GrammarTopic,
  CreateGrammarDto,
  UpdateGrammarDto,
  FindGrammarQueryDto,
  GrammarService
> {
  constructor(service: GrammarService) {
    super(service);
  }
}
