import { PartialType } from '@nestjs/mapped-types';
import { CreateReservasDto } from './create-reservas.dto';

export class UpdateReservasDto extends PartialType(CreateReservasDto) {}
