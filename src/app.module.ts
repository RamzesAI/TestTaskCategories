import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
