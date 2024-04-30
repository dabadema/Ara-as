import { Injectable } from '@nestjs/common';
import { CreateCentrosDeportivoDto } from './dto/create-centros-deportivo.dto';
import { UpdateCentrosDeportivoDto } from './dto/update-centros-deportivo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CentrosDeportivosEntity } from './entities/centros-deportivos.entity';
import { generateUUID } from 'src/utils/uuid';

@Injectable()
export class CentrosDeportivosService {
  /**
   * Constructor
   */
  constructor(
    @InjectRepository(CentrosDeportivosEntity)
    private readonly centrosDeportivosEntityRepository: Repository<CentrosDeportivosEntity>,
  ) {}

  async create(createCentrosDeportivoDto: CreateCentrosDeportivoDto) {
    const { ciudad, correoElectronico, direccion, nombre, telefono } =
      createCentrosDeportivoDto;
    const centrosDeportivosEntity = new CentrosDeportivosEntity();

    centrosDeportivosEntity.centroId = generateUUID();
    centrosDeportivosEntity.ciudad = ciudad;
    centrosDeportivosEntity.correoElectronico = correoElectronico;
    centrosDeportivosEntity.direccion = direccion;
    centrosDeportivosEntity.nombre = nombre;
    centrosDeportivosEntity.telefono = telefono;

    const nuevoCentroDeportivo =
      await this.centrosDeportivosEntityRepository.save(
        centrosDeportivosEntity,
      );

    return nuevoCentroDeportivo;
  }

  async findAll() {
    const todosCentrosDeportivos =
      await this.centrosDeportivosEntityRepository.find({});
    return todosCentrosDeportivos;
  }

  async findOne(id: string) {
    const centrosDeportivoById =
      await this.centrosDeportivosEntityRepository.find({
        where: {
          centroId: id,
        },
      });
    return centrosDeportivoById;
  }

  update(id: string, updateCentrosDeportivoDto: UpdateCentrosDeportivoDto) {
    return `This action updates a #${id} centrosDeportivo`;
  }

  async remove(id: string) {
    const borrarCentroDeportiboById =
      await this.centrosDeportivosEntityRepository.findOne({
        where: {
          centroId: id,
        },
      });

    await this.centrosDeportivosEntityRepository.delete(
      borrarCentroDeportiboById,
    );
    return borrarCentroDeportiboById;
  }
}
