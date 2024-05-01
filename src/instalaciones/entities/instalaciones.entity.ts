import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('instalaciones')
export class InstalacionesEntity {
  @PrimaryColumn({ name: 'instalacion_id', type: 'varchar' })
  instalacionId: string;

  @Column({ name: 'nombre', type: 'varchar' })
  nombre: string;

  @Column({ name: 'descripcion', type: 'text' })
  descripcion: string;

  @Column({ name: 'centro_id', type: 'varchar' })
  centroId: string;
}
