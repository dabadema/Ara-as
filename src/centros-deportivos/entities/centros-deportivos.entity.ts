import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('centros_deportivos')
export class CentrosDeportivosEntity {
  @PrimaryColumn({ name: 'centro_id' })
  centroId: string;

  @Column({ name: 'nombre', type: 'varchar' })
  nombre: string;

  @Column({ name: 'direccion', type: 'varchar' })
  direccion: string;

  @Column({ name: 'ciudad', type: 'varchar', length: 50 })
  ciudad: string;

  @Column({ name: 'telefono', type: 'varchar', length: 15 })
  telefono: string;

  @Column({ name: 'correo_electronico', type: 'varchar' })
  correoElectronico: string;
}
