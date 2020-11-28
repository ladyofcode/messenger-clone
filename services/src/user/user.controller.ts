import { Body, Controller, Get, Param, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from '@shared/dto/user-dto';
import { SessionGuard } from 'src/authentication/session.guard';

@UseGuards(SessionGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async currentUser(@Req() req) {
    return req['user'];
  }

  @Get(':id')
  async single(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDTO) {

    //@todo validation
    return this.userService.update(id, updateUserDto);
  }
}
