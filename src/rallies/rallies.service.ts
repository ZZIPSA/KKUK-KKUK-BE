import { Injectable } from '@nestjs/common';
import { CreateRallyDto } from './dto/create-rally.dto';
import { UpdateRallyDto } from './dto/update-rally.dto';

@Injectable()
export class RalliesService {
  create(createRallyDto: CreateRallyDto) {
    return 'This action adds a new rally';
  }

  findAll() {
    return `This action returns all rallies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rally`;
  }

  update(id: number, updateRallyDto: UpdateRallyDto) {
    return `This action updates a #${id} rally`;
  }

  remove(id: number) {
    return `This action removes a #${id} rally`;
  }
}
