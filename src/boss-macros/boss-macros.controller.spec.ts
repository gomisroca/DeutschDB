import { Test, TestingModule } from '@nestjs/testing';
import { BossMacrosController } from './boss-macros.controller';
import { BossMacrosService } from './boss-macros.service';

describe('BossMacrosController', () => {
  let controller: BossMacrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BossMacrosController],
      providers: [BossMacrosService],
    }).compile();

    controller = module.get<BossMacrosController>(BossMacrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
