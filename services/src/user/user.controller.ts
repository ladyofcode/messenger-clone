import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from '@shared/dto/user-dto';
import { SessionGuard } from 'src/authentication/session.guard';
import { CurrentUser } from 'src/authentication/user.decorator';
import { User } from 'src/entities/user.entity';
import { ContactsService } from 'src/contacts/contacts.service';
import { EventService } from 'src/events/event.service';

@UseGuards(SessionGuard)
@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private contactsService: ContactsService,
    private eventService: EventService,
  ) {}

  @Get()
  async currentUser(@CurrentUser() user: User) {
    return user;
  }

  @Get(':id')
  async single(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDTO) {
    const contacts = await this.contactsService.listFor(id);
    const userIds = contacts.map((c) => c.id);
    this.eventService.sendEventToUsersIfAvailable(userIds, 'status-change', {
      userId: id,
      status: updateUserDto.status || undefined,
      statusMessage: updateUserDto.statusMessage || undefined,
    });
    //@todo validation
    return this.userService.update(id, updateUserDto);
  }
}
