import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:4200/'
  });
  await app.listen(3000);
}

bootstrap().then(function() {
  console.log("\nReady for maths!");
}); 
