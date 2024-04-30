import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('accesos')
export class AccesoEntity {
  @PrimaryColumn({ name: 'acceso_id' })
  accesoId: number;

  @Column({ name: 'fecha_hora', type: 'timestamp' })
  fechaHora: Date;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'instalacion_id' })
  instalacionId: string;

  @Column({
    name: 'tipo_acceso',
    type: 'varchar',
  })
  tipoAcceso: string;
}
