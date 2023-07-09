import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArithmeticModule } from './arithmetic/arithmetic.module';
import { OpcodeModule } from './opcode/opcode.module';

@Module({
  imports: [ArithmeticModule, OpcodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
