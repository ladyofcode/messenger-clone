import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDTO } from '@shared/dto/message-dto';
import { User } from 'src/entities/user.entity';
import { CurrentUser } from 'src/authentication/user.decorator';
import { EventService } from 'src/events/event.service';
import { GroupsService } from './groups.service';
import { SessionGuard } from 'src/authentication/session.guard';

@Controller('groups/:groupId/messages')
@UseGuards(SessionGuard)
export class MessagesController {
  constructor(
    private messagesService: MessagesService,
    private eventService: EventService,
    private groupService: GroupsService,
  ) {}

  @Get()
  async all(@Param('groupId') groupId: number) {
    return this.messagesService.listAll(groupId);
  }

  @Post()
  async create(
    @Body() { groupId, message }: CreateMessageDTO,
    @CurrentUser() user: User,
  ) {
    const createdMessage = await this.messagesService.create(
      user.id,
      groupId,
      message,
    );
    const usersInGroup = await this.groupService.allUsersIn(groupId);
    const userIds = usersInGroup
      .map((u) => u.id)
      .filter((uid) => uid !== user.id);
    this.eventService.sendEventToUsersIfAvailable(
      userIds,
      'message',
      createdMessage,
    );
    return createdMessage;
  }

  @Delete(':id')
  async remove(@Param('id') messageId: number) {
    return this.messagesService.remove(messageId);
  }
}
