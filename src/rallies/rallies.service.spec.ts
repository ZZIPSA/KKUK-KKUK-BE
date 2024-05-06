import { Test, TestingModule } from '@nestjs/testing';
import { RalliesService } from './rallies.service';

describe('RalliesService', () => {
  let service: RalliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RalliesService],
    }).compile();

    service = module.get<RalliesService>(RalliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
