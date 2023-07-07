import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ArithmeticService } from './arithmetic.service';
import { OpcodeEnum } from './enums/OpcodeEnum';

@Controller('arithmetic')
export class ArithmeticController {
    constructor(private mathService: ArithmeticService) {}

    @Post()
    async doOp(@Body('a') a: number,
        @Body('b') b: number,
        @Body('opcode') opcode: number
    ): Promise<number> {
        return this.mathService.doOp(a, b, opcode as OpcodeEnum);
    }

    @Get()
    async history(): Promise<string[]> {
        return this.mathService.history();
    }
}
