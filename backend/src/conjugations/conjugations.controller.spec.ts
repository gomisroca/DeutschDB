import { Test, TestingModule } from '@nestjs/testing';
import { ConjugationsController } from './conjugations.controller';

describe('ConjugationsController', () => {
  let controller: ConjugationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConjugationsController],
    }).compile();

    controller = module.get<ConjugationsController>(ConjugationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
