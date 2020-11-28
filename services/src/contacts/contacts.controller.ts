import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('users/:id/contacts')
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Get()
  async listFor(@Param('id') userId: number) {
    return this.contactService.listFor(userId);
  }

  @Post()
  async create(
    @Param('id') userId: number,
    @Body('userId') otherUserId: number,
  ) {
    return this.contactService.create(userId, otherUserId);
  }

  async delete(
    @Param('id') userId: number,
    @Body('userId') otherUserId: number,
  ) {
    return this.contactService.remove(userId, otherUserId);
  }
}
