import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('accesos')
export class AccesosEntity {
  @PrimaryColumn({ name: 'acceso_id' })
  accesoId: string;

  @Column({ name: 'fecha_hora', type: 'timestamp' })
  fechaHora: string; // Esto deberia de ser un Date pero de momento lo dejo as'i

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
