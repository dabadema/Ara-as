import { Test, TestingModule } from '@nestjs/testing';
import { CentrosDeportivosService } from './centros-deportivos.service';

describe('CentrosDeportivosService', () => {
  let service: CentrosDeportivosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentrosDeportivosService],
    }).compile();

    service = module.get<CentrosDeportivosService>(CentrosDeportivosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
