import { Module } from '@nestjs/common';
import { RalliesService } from './rallies.service';
import { RalliesController } from './rallies.controller';

@Module({
  controllers: [RalliesController],
  providers: [RalliesService],
})
export class RalliesModule {}
