import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('reservas')
export class ReservasEntity {
  @PrimaryColumn({ name: 'reserva_id', type: 'varchar' })
  reservaId: string;

  @Column({ name: 'fecha_hora_inicio', type: 'varchar' })
  fechaHoraInicio: string;

  @Column({ name: 'fecha_hora_fin', type: 'varchar' })
  fechaHoraFin: string;

  @Column({ name: 'user_id', type: 'varchar' })
  userId: string;

  @Column({ name: 'instalacion_id', type: 'varchar' })
  instalacionId: string;

  @Column({ name: 'centro_id', type: 'varchar' })
  centroId: string;
}
