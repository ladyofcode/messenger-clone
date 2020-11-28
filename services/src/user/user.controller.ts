import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from '@shared/dto/user-dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async currentUser() {
    // TODO: get user from auth
    return null;
  }

  @Get(':id')
  async single(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDTO) {
    return this.userService.update(id, updateUserDto);
  }
}
