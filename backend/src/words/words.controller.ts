import { Controller } from '@nestjs/common';
import { WordsService } from './words.service';
import { CreateWordDto, FindWordsQueryDto, UpdateWordDto } from './words.dto';
import { BaseController } from 'src/base/base.controller';
import { Word } from '@generated/prisma/client';

@Controller('words')
export class WordsController extends BaseController<
  Word,
  CreateWordDto,
  UpdateWordDto,
  FindWordsQueryDto,
  WordsService
> {
  constructor(service: WordsService) {
    super(service);
  }
}
