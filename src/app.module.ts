import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArithmeticModule } from './arithmetic/arithmetic.module';

@Module({
  imports: [ArithmeticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
