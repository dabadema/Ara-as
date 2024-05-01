import { Injectable } from '@nestjs/common';
import { CreateUsuariosDto } from './dto/create-usuario.dto';
import { UpdateUsuariosDto } from './dto/update-usuario.dto';
import { UsuariosEntity } from './entities/usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateUUID } from 'src/utils/uuid';

@Injectable()
export class UsuariosService {
  /**
   * Constructor
   */
  constructor(
    @InjectRepository(UsuariosEntity)
    private readonly usuariosEntityRepository: Repository<UsuariosEntity>,
  ) {}

  async create(createUsuarioDto: CreateUsuariosDto) {
    const {
      nombre,
      apellidos,
      direccion,
      email,
      password,
      tipoUsuario,
      telefono,
    } = createUsuarioDto;
    const usuariosEntity = new UsuariosEntity();

    usuariosEntity.userId = generateUUID();
    usuariosEntity.nombre = nombre;
    usuariosEntity.apellidos = apellidos;
    usuariosEntity.direccion = direccion;
    usuariosEntity.email = email;
    usuariosEntity.password = password;
    usuariosEntity.tipoUsuario = tipoUsuario;
    usuariosEntity.telefono = telefono;

    const nuevoUsuario =
      await this.usuariosEntityRepository.save(usuariosEntity);

    return nuevoUsuario;
  }

  async findAll() {
    const todosUsuarios = await this.usuariosEntityRepository.find({});
    return todosUsuarios;
  }

  async findOne(id: string) {
    const usuarioById = await this.usuariosEntityRepository.find({
      where: {
        userId: id,
      },
    });
    return usuarioById;
  }

  update(id: number, updateUsuariosDto: UpdateUsuariosDto) {
    return `This action updates a #${id} usuario`;
  }

  async remove(id: string) {
    const borrarUsuarioById = await this.usuariosEntityRepository.findOne({
      where: {
        userId: id,
      },
    });

    await this.usuariosEntityRepository.delete(borrarUsuarioById);

    return borrarUsuarioById;
  }
}
