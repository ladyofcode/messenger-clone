import { Controller, Post, UseGuards } from '@nestjs/common';
import { SessionGuard } from 'src/authentication/session.guard';
import { CurrentUser } from 'src/authentication/user.decorator';
import { User } from 'src/entities/user.entity';
import { EventService } from './event.service';

@Controller('events')
@UseGuards(SessionGuard)
export class EventController {
  constructor(private eventService: EventService) {}

  @Post('create-token')
  async create(@CurrentUser() user: User) {
    const key = await this.eventService.createGatewayToken(user.id);
    return { token: key.token };
  }
}
