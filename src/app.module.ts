import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CentrosDeportivosModule } from './centros-deportivos/centros-deportivos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesosModule } from './accesos/accesos.module';
import { InstalacionesModule } from './instalaciones/instalaciones.module';
import { ReservasModule } from './reservas/reservas.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-proud-paper-a5jd8qga.us-east-2.aws.neon.tech',
      port: 5432,
      database: 'PI_GID_DAW',
      schema: process.env.DATABASE_SCHEMA,
      username: 'PI_GID_DAW_owner',
      password: '0YRSr2EDCzyB',
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    CentrosDeportivosModule,
    AccesosModule,
    InstalacionesModule,
    ReservasModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
