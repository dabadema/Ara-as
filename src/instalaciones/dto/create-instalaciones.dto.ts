import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInstalacionesDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  centroId: string;
}
