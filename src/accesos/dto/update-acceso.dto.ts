import { PartialType } from '@nestjs/mapped-types';
import { CreateAccesosDto } from './create-acceso.dto';

export class UpdateAccesoDto extends PartialType(CreateAccesosDto) {}
