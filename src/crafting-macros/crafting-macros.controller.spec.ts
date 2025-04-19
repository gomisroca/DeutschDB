import { Test, TestingModule } from '@nestjs/testing';
import { CraftingMacrosController } from './crafting-macros.controller';
import { CraftingMacrosService } from './crafting-macros.service';

describe('CraftingMacrosController', () => {
  let controller: CraftingMacrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CraftingMacrosController],
      providers: [CraftingMacrosService],
    }).compile();

    controller = module.get<CraftingMacrosController>(CraftingMacrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
