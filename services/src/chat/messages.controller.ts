import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDTO } from '../../../common/src/dto/message-dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async all() {
    // TODO: get user from auth
    const user = null;
    return this.messagesService.listAll(user);
  }

  @Post()
  async create(@Body() { groupId, message }: CreateMessageDTO) {
    // TODO: get user from auth
    const user = null;
    return this.messagesService.create(user, groupId, message);
  }

  @Delete(':id')
  async remove(@Param('id') messageId: number) {
    return this.messagesService.remove(messageId);
  }
}
