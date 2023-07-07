import { Module } from '@nestjs/common';
import { ArithmeticController } from './arithmetic.controller';
import { ArithmeticService } from './arithmetic.service';

@Module({
    controllers: [ArithmeticController],
    providers: [ArithmeticService]
})
export class ArithmeticModule {}
