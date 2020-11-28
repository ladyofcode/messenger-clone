import { User } from '@models';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserPipe } from '../user/user.pipe';
import { ContactsService } from './contacts.service';

@Controller('users/:id/contacts')
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Get()
  async listFor(@Param('id', UserPipe) user: User) {
    return this.contactService.listFor(user);
  }

  @Post()
  async create(
    @Param('id', UserPipe) user: User,
    @Body('userId', UserPipe) otherUser: User,
  ) {
    return this.contactService.create(user, otherUser);
  }

  async delete(
    @Param('id', UserPipe) user: User,
    @Body('userId', UserPipe) otherUser: User,
  ) {
    return this.contactService.remove(user, otherUser);
  }
}
