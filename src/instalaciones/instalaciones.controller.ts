import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstalacionesService } from './instalaciones.service';
import { CreateInstalacioneDto } from './dto/create-instalacione.dto';
import { UpdateInstalacioneDto } from './dto/update-instalacione.dto';

@Controller('instalaciones')
export class InstalacionesController {
  constructor(private readonly instalacionesService: InstalacionesService) {}

  @Post()
  create(@Body() createInstalacioneDto: CreateInstalacioneDto) {
    return this.instalacionesService.create(createInstalacioneDto);
  }

  @Get()
  findAll() {
    return this.instalacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instalacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstalacioneDto: UpdateInstalacioneDto) {
    return this.instalacionesService.update(+id, updateInstalacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instalacionesService.remove(+id);
  }
}
