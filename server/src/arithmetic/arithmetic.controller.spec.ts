import { Test, TestingModule } from '@nestjs/testing';
import { ArithmeticController } from './arithmetic.controller';

describe('ArithmeticController', () => {
  let controller: ArithmeticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArithmeticController],
    }).compile();

    controller = module.get<ArithmeticController>(ArithmeticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
