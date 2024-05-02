import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
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

  async validateUser(loginUsuarioDto: LoginUsuarioDto): Promise<any> {
    const user = await this.usuariosEntityRepository.findOne({
      where: {
        email: loginUsuarioDto.email,
        password: loginUsuarioDto.password,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuario o contraseña inválida');
    }

    return user;
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
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
    const usuarioById = await this.usuariosEntityRepository.findOne({
      where: {
        userId: id,
      },
    });
    return usuarioById;
  }

  async update(
    id: string,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuariosEntity> {
    const usuario = await this.usuariosEntityRepository.preload({
      userId: id,
      ...updateUsuarioDto,
    });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    return this.usuariosEntityRepository.save(usuario);
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
