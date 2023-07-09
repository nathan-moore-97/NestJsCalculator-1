import { Test, TestingModule } from '@nestjs/testing';
import { OpcodeService } from './opcode.service';

describe('OpcodeService', () => {
  let service: OpcodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpcodeService],
    }).compile();

    service = module.get<OpcodeService>(OpcodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
