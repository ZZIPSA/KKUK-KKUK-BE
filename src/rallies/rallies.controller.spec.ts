import { Test, TestingModule } from '@nestjs/testing';
import { RalliesController } from './rallies.controller';
import { RalliesService } from './rallies.service';

describe('RalliesController', () => {
  let controller: RalliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RalliesController],
      providers: [RalliesService],
    }).compile();

    controller = module.get<RalliesController>(RalliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
