import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReservasDto {
  @IsNotEmpty()
  @IsString()
  fechaHoraInicio: string;

  @IsNotEmpty()
  @IsString()
  fechaHoraFin: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  instalacionId: string;

  @IsNotEmpty()
  @IsString()
  centroId: string;
}
