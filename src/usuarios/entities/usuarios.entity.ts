import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('usuarios')
export class UsuariosEntity {
  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @Column({ name: 'nombre', type: 'varchar' })
  nombre: string;

  @Column({ name: 'apellidos', type: 'varchar' })
  apellidos: string;

  @Column({ name: 'direccion', type: 'varchar' })
  direccion: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'tipo_usuario', type: 'varchar' })
  tipoUsuario: string;

  @Column({ name: 'telefono', type: 'varchar' })
  telefono: string;

  @Column({ name: 'centro_id', type: 'varchar' })
  centroId: string;
}
