import { Module } from '@nestjs/common';
import { OpcodeController } from './opcode.controller';
import { OpcodeService } from './opcode.service';

@Module({
  controllers: [OpcodeController],
  providers: [OpcodeService]
})
export class OpcodeModule {}
