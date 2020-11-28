import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDTO } from '@shared/dto/message-dto';
import { SessionGuard } from 'src/authentication/session.guard';
@UseGuards(SessionGuard)
@Controller('groups/:groupId/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async all(@Param('groupId') groupId: number) {
    return this.messagesService.listAll(groupId);
  }

  @Post()
  async create(@Body() { groupId, message }: CreateMessageDTO) {
    return this.messagesService.create(groupId, message);
  }

  @Delete(':id')
  async remove(@Param('id') messageId: number) {
    return this.messagesService.remove(messageId);
  }
}
