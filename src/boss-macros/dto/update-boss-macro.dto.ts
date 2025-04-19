import { PartialType } from '@nestjs/mapped-types';
import { CreateBossMacroDto } from './create-boss-macro.dto';

export class UpdateBossMacroDto extends PartialType(CreateBossMacroDto) {}
