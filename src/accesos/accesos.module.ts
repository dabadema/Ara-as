import { Module } from '@nestjs/common';
import { AccesosService } from './accesos.service';
import { AccesosController } from './accesos.controller';
import { AccesosEntity } from './entities/accesos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AccesosEntity])],
  controllers: [AccesosController],
  providers: [AccesosService],
})
export class AccesosModule {}
