import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SessionGuard } from 'src/authentication/session.guard';
import { CurrentUser } from 'src/authentication/user.decorator';
import { User } from 'src/entities/user.entity';
import { ContactsService } from './contacts.service';

@UseGuards(SessionGuard)
@Controller('contacts')
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Get()
  async listFor(@CurrentUser() user: User) {
    return this.contactService.listFor(user.id);
  }

  @Post()
  async create(@CurrentUser() user: User, @Body('userId') otherUserId: number) {
    return this.contactService.create(user.id, otherUserId);
  }

  @Delete(':userId')
  async delete(@CurrentUser() user: User, @Body('userId') otherUserId: number) {
    return this.contactService.remove(user.id, otherUserId);
  }
}
