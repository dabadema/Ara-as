// QUIERO ENTENDER PORQUE NO PUEDO USAR LOS ESTADOS ALMACENANDO DOS VALORES ME HA OCURRIDO CON EL CENTRO DEPORTIVO Y HE TENIDO QUE CREAR CENTRO DEPORTIVO ID, ME PARECEN DEMASIADOS ESTADOS

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReservasDto } from './dto/create-reservas.dto';
import { UpdateReservasDto } from './dto/update-reservas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservasEntity } from './entities/reserva.entity';
import { Repository } from 'typeorm';
import { generateUUID } from 'src/utils/uuid';

@Injectable()
export class ReservasService {
  /**
   * Constructor
   */
  constructor(
    @InjectRepository(ReservasEntity)
    private readonly reservasEntityRepository: Repository<ReservasEntity>,
  ) {}

  async create(createReservasDto: CreateReservasDto) {
    const { fechaHoraInicio, fechaHoraFin, userId, instalacionId, centroId } =
      createReservasDto;
    const reservasEntity = new ReservasEntity();

    reservasEntity.reservaId = generateUUID();
    reservasEntity.fechaHoraInicio = fechaHoraInicio;
    reservasEntity.fechaHoraFin = fechaHoraFin;
    reservasEntity.userId = userId;
    reservasEntity.instalacionId = instalacionId;
    reservasEntity.centroId = centroId;

    try {
      const nuevaReserva =
        await this.reservasEntityRepository.save(reservasEntity);
      return nuevaReserva;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    const todasReservas = await this.reservasEntityRepository.find({});

    return todasReservas;
  }

  async findOne(id: string) {
    const reservaById = await this.reservasEntityRepository.find({
      where: {
        reservaId: id,
      },
    });
    return reservaById;
  }

  async findByInstalacion(instalacionId: string) {
    return this.reservasEntityRepository.find({
      where: {
        instalacionId,
      },
    });
  }

  update(id: number, updateReservasDto: UpdateReservasDto) {
    return `This action updates a #${id} reserva`;
  }

  async remove(id: string) {
    const borrarReservaById = await this.reservasEntityRepository.findOne({
      where: {
        reservaId: id,
      },
    });

    await this.reservasEntityRepository.delete(borrarReservaById);

    return borrarReservaById;
  }
}
