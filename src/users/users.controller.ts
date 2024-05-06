import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body('email') email: string, @Body('name') name: string) {
    console.log(email);
    return this.usersService.createUser({ email, name });
  }
}
