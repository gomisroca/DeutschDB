import { Test, TestingModule } from '@nestjs/testing';
import { BossMacrosService } from './boss-macros.service';

describe('BossMacrosService', () => {
  let service: BossMacrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BossMacrosService],
    }).compile();

    service = module.get<BossMacrosService>(BossMacrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
