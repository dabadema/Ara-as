import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReservasDto {
  @IsNotEmpty()
  @IsString()
  reservaId: string;

  @IsNotEmpty()
  @IsString()
  fechaInicio: string;

  @IsNotEmpty()
  @IsString()
  fechaFin: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  instalacionId: string;
}
