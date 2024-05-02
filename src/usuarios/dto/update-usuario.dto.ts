import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  nombre?: string;
  apellidos?: string;
  direccion?: string;
  telefono?: string;
  email?: string;
}
