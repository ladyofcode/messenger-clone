import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/authentication/session.guard';
import { ContactsService } from './contacts.service';

@UseGuards(SessionGuard)
@Controller('users/:userId/contacts')
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Get()
  async listFor(@Param('userId') userId: number) {
    return this.contactService.listFor(userId);
  }

  @Post()
  async create(
    @Param('userId') userId: number,
    @Body('userId') otherUserId: number,
  ) {
    return this.contactService.create(userId, otherUserId);
  }

  async delete(
    @Param('userId') userId: number,
    @Body('userId') otherUserId: number,
  ) {
    return this.contactService.remove(userId, otherUserId);
  }
}
