import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('reservas')
export class ReservasEntity {
  @PrimaryColumn({ name: 'reserva_id', type: 'varchar' })
  reservaId: string;

  @Column({ name: 'fecha_inicio', type: 'varchar' })
  fechaInicio: string;

  @Column({ name: 'fecha_fin', type: 'varchar' })
  fechaFin: string;

  @Column({ name: 'user_id', type: 'varchar' })
  userId: string;

  @Column({ name: 'instalacion_id', type: 'varchar' })
  instalacionId: string;
}
