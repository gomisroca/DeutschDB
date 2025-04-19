import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMacros(): string[] {
    return ['Hello World!', 'Second Macro!', 'Third Macro!'];
  }
}
