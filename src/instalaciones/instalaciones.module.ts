import { Module } from '@nestjs/common';
import { InstalacionesService } from './instalaciones.service';
import { InstalacionesController } from './instalaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstalacionesEntity } from './entities/instalaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstalacionesEntity])],
  controllers: [InstalacionesController],
  providers: [InstalacionesService],
})
export class InstalacionesModule {}
