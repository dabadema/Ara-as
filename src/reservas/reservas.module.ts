import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservasEntity } from './entities/reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservasEntity])],
  controllers: [ReservasController],
  providers: [ReservasService],
})
export class ReservasModule {}
