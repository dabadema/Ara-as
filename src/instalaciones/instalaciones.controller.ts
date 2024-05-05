import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstalacionesService } from './instalaciones.service';
import { CreateInstalacionesDto } from './dto/create-instalaciones.dto';
import { UpdateInstalacionesDto } from './dto/update-instalacione.dto';

@Controller('instalaciones')
export class InstalacionesController {
  constructor(private readonly instalacionesService: InstalacionesService) {}

  @Post()
  create(@Body() createInstalacionesDto: CreateInstalacionesDto) {
    return this.instalacionesService.create(createInstalacionesDto);
  }

  @Get()
  findAll() {
    return this.instalacionesService.findAll();
  }

  @Get('/centro/:centroId')
  findAllInstalacionesByCentroId(@Param('centroId') centroId: string) {
    return this.instalacionesService.findAllInstalacionesByCentroId(centroId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instalacionesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstalacioneDto: UpdateInstalacionesDto,
  ) {
    return this.instalacionesService.update(+id, updateInstalacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instalacionesService.remove(id);
  }
}
