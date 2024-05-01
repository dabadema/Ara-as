import { Injectable } from '@nestjs/common';
import { CreateInstalacioneDto } from './dto/create-instalacione.dto';
import { UpdateInstalacioneDto } from './dto/update-instalacione.dto';

@Injectable()
export class InstalacionesService {
  create(createInstalacioneDto: CreateInstalacioneDto) {
    return 'This action adds a new instalacione';
  }

  findAll() {
    return `This action returns all instalaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instalacione`;
  }

  update(id: number, updateInstalacioneDto: UpdateInstalacioneDto) {
    return `This action updates a #${id} instalacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} instalacione`;
  }
}
