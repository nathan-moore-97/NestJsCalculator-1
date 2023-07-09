import { Test, TestingModule } from '@nestjs/testing';
import { OpcodeController } from './opcode.controller';

describe('OpcodeController', () => {
  let controller: OpcodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpcodeController],
    }).compile();

    controller = module.get<OpcodeController>(OpcodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
