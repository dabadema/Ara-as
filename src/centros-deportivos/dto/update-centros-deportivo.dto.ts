import { PartialType } from '@nestjs/mapped-types';
import { CreateCentrosDeportivoDto } from './create-centros-deportivo.dto';

export class UpdateCentrosDeportivoDto extends PartialType(CreateCentrosDeportivoDto) {}
