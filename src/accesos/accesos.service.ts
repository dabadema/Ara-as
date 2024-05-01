import { Injectable } from '@nestjs/common';
import { CreateAccesosDto } from './dto/create-acceso.dto';
import { UpdateAccesoDto } from './dto/update-acceso.dto';
import { AccesosEntity } from './entities/accesos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { generateUUID } from 'src/utils/uuid';

@Injectable()
export class AccesosService {
  /**
   * Constructor
   */
  constructor(
    @InjectRepository(AccesosEntity)
    private readonly accesosEntityRepository: Repository<AccesosEntity>,
  ) {}

  async create(createAccesosDto: CreateAccesosDto) {
    const { userId, instalacionId, tipoAcceso } = createAccesosDto;
    const accesosEntity = new AccesosEntity();

    const actualDate = Date();

    accesosEntity.accesoId = generateUUID();
    accesosEntity.fechaHora = actualDate; // TODO encontrar manera de que esto sea realmente un Date en la Entidad
    accesosEntity.userId = userId; // TODO Tendriamos que ver la manera de que se ponga aqui el Id del usuario que accede al igual que ocurre luego con el Id de la instalación
    accesosEntity.instalacionId = instalacionId;
    accesosEntity.tipoAcceso = tipoAcceso;

    const nuevoAcceso = await this.accesosEntityRepository.save(accesosEntity);

    return nuevoAcceso;
  }

  async findAll() {
    const todosAccesos = await this.accesosEntityRepository.find({});
    return todosAccesos;
  }

  async findOne(id: string) {
    const accesoById = await this.accesosEntityRepository.find({
      where: {
        accesoId: id,
      },
    });
    return accesoById;
  }

  update(id: number, updateAccesoDto: UpdateAccesoDto) {
    return `This action updates a #${id} acceso`;
  }

  async remove(id: string) {
    const borrarAccesoById = await this.accesosEntityRepository.findOne({
      where: {
        accesoId: id,
      },
    });

    await this.accesosEntityRepository.delete(borrarAccesoById);
    return borrarAccesoById;
  }
}
