import { PartialType } from '@nestjs/mapped-types';
import { CreateInstalacioneDto } from './create-instalacione.dto';

export class UpdateInstalacioneDto extends PartialType(CreateInstalacioneDto) {}
