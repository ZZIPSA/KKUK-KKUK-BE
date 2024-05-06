import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RalliesService } from './rallies.service';
import { CreateRallyDto } from './dto/create-rally.dto';
import { UpdateRallyDto } from './dto/update-rally.dto';

@Controller('rally')
export class RalliesController {
  constructor(private readonly ralliesService: RalliesService) {}

  @Post()
  create(@Body() createRallyDto: CreateRallyDto) {
    return this.ralliesService.create(createRallyDto);
  }

  @Get()
  findAll() {
    return this.ralliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ralliesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRallyDto: UpdateRallyDto) {
    return this.ralliesService.update(+id, updateRallyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ralliesService.remove(+id);
  }
}
