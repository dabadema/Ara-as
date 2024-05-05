import { Injectable } from '@nestjs/common';
import { CreateInstalacionesDto } from './dto/create-instalaciones.dto';
import { UpdateInstalacionesDto } from './dto/update-instalacione.dto';
import { InstalacionesEntity } from './entities/instalaciones.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateUUID } from 'src/utils/uuid';

@Injectable()
export class InstalacionesService {
  /**
   * Constructor
   */
  constructor(
    @InjectRepository(InstalacionesEntity)
    private readonly instalacionesEntityRepository: Repository<InstalacionesEntity>,
  ) {}

  async create(createInstalacionesDto: CreateInstalacionesDto) {
    const { nombre, descripcion, centroId } = createInstalacionesDto;
    const instalacionesEntity = new InstalacionesEntity();

    instalacionesEntity.instalacionId = generateUUID();
    instalacionesEntity.nombre = nombre;
    instalacionesEntity.descripcion = descripcion;
    instalacionesEntity.centroId = centroId;

    const nuevaInstalacion =
      await this.instalacionesEntityRepository.save(instalacionesEntity);

    return nuevaInstalacion;
  }

  async findAll() {
    const todasInstalaciones = await this.instalacionesEntityRepository.find(
      {},
    );
    return todasInstalaciones;
  }

  async findAllInstalacionesByCentroId(centroId: string) {
    const allInstalacionesById = await this.instalacionesEntityRepository.find({
      where: { centroId: centroId },
    });
    return allInstalacionesById;
  }

  async findOne(id: string) {
    const instalacionById = await this.instalacionesEntityRepository.find({
      where: {
        instalacionId: id,
      },
    });
    return instalacionById;
  }

  update(id: number, updateInstalacionesDto: UpdateInstalacionesDto) {
    return `This action updates a #${id} instalacione`;
  }

  async remove(id: string) {
    const borrarInstalacionById =
      await this.instalacionesEntityRepository.findOne({
        where: {
          instalacionId: id,
        },
      });

    await this.instalacionesEntityRepository.delete(borrarInstalacionById);
    return borrarInstalacionById;
  }
}
