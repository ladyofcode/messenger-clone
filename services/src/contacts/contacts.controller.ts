import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SessionGuard } from 'src/authentication/session.guard';
import { CurrentUser } from 'src/authentication/user.decorator';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { ContactsService } from './contacts.service';

@UseGuards(SessionGuard)
@Controller('contacts')
export class ContactsController {
  constructor(
    private contactService: ContactsService,
    private userService: UserService,
  ) {}

  @Get()
  async listFor(@CurrentUser() user: User) {
    return this.contactService.listFor(user.id);
  }

  @Post()
  async create(
    @CurrentUser() user: User,
    @Body('email') otherUserEmail: string,
  ) {
    const otherUser = await this.userService.findByEmail(otherUserEmail);
    if (otherUser == null) throw new NotFoundException('user not found');
    return this.contactService.create(user.id, otherUser.id);
  }

  @Delete(':userId')
  async delete(@CurrentUser() user: User, @Body('userId') otherUserId: number) {
    return this.contactService.remove(user.id, otherUserId);
  }
}
