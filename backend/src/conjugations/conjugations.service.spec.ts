import { Test, TestingModule } from '@nestjs/testing';
import { ConjugationsService } from './conjugations.service';

describe('ConjugationsService', () => {
  let service: ConjugationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConjugationsService],
    }).compile();

    service = module.get<ConjugationsService>(ConjugationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
