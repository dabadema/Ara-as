import { Module } from '@nestjs/common';
import { CentrosDeportivosService } from './centros-deportivos.service';
import { CentrosDeportivosController } from './centros-deportivos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentrosDeportivosEntity } from './entities/centros-deportivos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CentrosDeportivosEntity])],
  controllers: [CentrosDeportivosController],
  providers: [CentrosDeportivosService],
})
export class CentrosDeportivosModule {}
