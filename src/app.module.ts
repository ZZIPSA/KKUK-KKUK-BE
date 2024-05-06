import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RalliesModule } from './rallies/rallies.module';

@Module({
  imports: [RalliesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
