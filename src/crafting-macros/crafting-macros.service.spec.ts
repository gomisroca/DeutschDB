import { Test, TestingModule } from '@nestjs/testing';
import { CraftingMacrosService } from './crafting-macros.service';

describe('CraftingMacrosService', () => {
  let service: CraftingMacrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CraftingMacrosService],
    }).compile();

    service = module.get<CraftingMacrosService>(CraftingMacrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
