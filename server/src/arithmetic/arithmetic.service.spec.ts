import { Test, TestingModule } from '@nestjs/testing';
import { ArithmeticService } from './arithmetic.service';

describe('ArithmeticService', () => {
  let service: ArithmeticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArithmeticService],
    }).compile();

    service = module.get<ArithmeticService>(ArithmeticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
