import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosEntity } from './entities/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosEntity])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
