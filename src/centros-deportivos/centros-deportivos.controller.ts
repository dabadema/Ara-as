import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CentrosDeportivosService } from './centros-deportivos.service';
import { CreateCentrosDeportivoDto } from './dto/create-centros-deportivo.dto';
import { UpdateCentrosDeportivoDto } from './dto/update-centros-deportivo.dto';

@Controller('centros-deportivos')
export class CentrosDeportivosController {
  constructor(
    private readonly centrosDeportivosService: CentrosDeportivosService,
  ) {}

  @Post()
  create(@Body() createCentrosDeportivoDto: CreateCentrosDeportivoDto) {
    return this.centrosDeportivosService.create(createCentrosDeportivoDto);
  }

  @Get()
  findAll() {
    return this.centrosDeportivosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centrosDeportivosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCentrosDeportivoDto: UpdateCentrosDeportivoDto,
  ) {
    return this.centrosDeportivosService.update(id, updateCentrosDeportivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centrosDeportivosService.remove(id);
  }
}
