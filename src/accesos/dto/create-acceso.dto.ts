import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccesosDto {
  @IsNotEmpty()
  @IsDate()
  fechaHora: Date;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  instalacionId: string;

  @IsNotEmpty()
  @IsString()
  tipoAcceso: string;
}
