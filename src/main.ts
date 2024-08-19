import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, // Permite que somente propriedades definidas no DTO sejam aceitas
      forbidNonWhitelisted: true, // Retorna um erro caso uma propriedade não definida no DTO seja passada
      transform: true, // Converte os tipos das propriedades para os tipos definidos no DTO
    }
  ));

  await app.listen(3000);
}
bootstrap();
