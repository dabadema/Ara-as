import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCentrosDeportivoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  direccion: string;

  @IsString()
  telefono: string;

  @IsString()
  ciudad: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}
