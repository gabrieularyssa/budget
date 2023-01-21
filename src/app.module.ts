import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BudgetsController } from './budgets/budgets.controller';
// import { BudgetsService } from './budgets/budgets.service';
import { BudgetsModule } from './budgets/budgets.module';

@Module({
  imports: [BudgetsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password:'docker',
    database:'postgres',
    autoLoadEntities: true,
    synchronize: true,
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
