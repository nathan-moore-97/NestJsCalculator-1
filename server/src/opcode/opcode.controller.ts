import { Controller, Get } from '@nestjs/common';
import { OpcodeService } from './opcode.service';

@Controller('opcode')
export class OpcodeController {
    constructor(private readonly opcodeService: OpcodeService) {}

    @Get()
    getSupportedOpcodes(): string[] {
        return this.opcodeService.getSupportedOpcodes();
    }
}
