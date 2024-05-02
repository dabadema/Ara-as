import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuariosDto {
  // @IsNotEmpty()
  // @IsString()
  // userId: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsString()
  direccion: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['usuario', 'administrador'])
  tipoUsuario: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;
}
