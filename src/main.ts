import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    //se for passado algo que nao esteja no DTO sera desconsiderado
    whitelist: true,
    //retorna 404 se na requisição estiver campos diferentes do DTO
    forbidNonWhitelisted:true,
  }))
  await app.listen(3000);
}
bootstrap();
 