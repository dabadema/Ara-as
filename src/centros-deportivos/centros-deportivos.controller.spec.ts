import { Test, TestingModule } from '@nestjs/testing';
import { CentrosDeportivosController } from './centros-deportivos.controller';
import { CentrosDeportivosService } from './centros-deportivos.service';

describe('CentrosDeportivosController', () => {
  let controller: CentrosDeportivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentrosDeportivosController],
      providers: [CentrosDeportivosService],
    }).compile();

    controller = module.get<CentrosDeportivosController>(CentrosDeportivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
