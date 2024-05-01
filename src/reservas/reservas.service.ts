import { Injectable } from '@nestjs/common';
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
    const { fechaInicio, fechaFin, userId, instalacionId } = createReservasDto;
    const reservasEntity = new ReservasEntity();

    reservasEntity.reservaId = generateUUID();
    reservasEntity.fechaInicio = fechaInicio; //TODO este tipo de dato debe venir del front pero habra que restringir el FE para que sea una fecha y hora concreto
    reservasEntity.fechaFin = fechaFin;
    reservasEntity.userId = userId;
    reservasEntity.instalacionId = instalacionId;

    const nuevaReserva =
      await this.reservasEntityRepository.save(reservasEntity);

    return nuevaReserva;
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
