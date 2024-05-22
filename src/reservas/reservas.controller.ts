import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservasDto } from './dto/create-reservas.dto';
import { UpdateReservasDto } from './dto/update-reservas.dto';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  async create(@Body() createReservaDto: CreateReservasDto) {
    try {
      const nuevaReserva = await this.reservasService.create(createReservaDto);
      return nuevaReserva;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll() {
    return this.reservasService.findAll();
  }

  @Get('instalacionId')
  findByInstalacion(@Param('instalacionId') instalacionId: string) {
    return this.reservasService.findByInstalacion(instalacionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservasDto) {
    return this.reservasService.update(+id, updateReservaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservasService.remove(id);
  }
}
