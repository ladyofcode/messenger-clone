import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDTO } from '@shared/dto/message-dto';
import { SessionGuard } from 'src/authentication/session.guard';
import { User } from 'src/entities/user.entity';
import { CurrentUser } from 'src/authentication/user.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
// @UseGuards(SessionGuard)
@Controller('groups/:groupId/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async all(@Param('groupId') groupId: number) {
    return this.messagesService.listAll(groupId);
  }

  // @Post('file')
  // @UseInterceptors(FileInterceptor('file', { dest: '/uploads' }))
  // uploadFile(@UploadedFile() file) {
  //   console.log(file.upload, file.save, file.store);
  // }

  @Post()
  async create(
    @Body() { groupId, message }: CreateMessageDTO,
    @CurrentUser() user: User,
  ) {
    return this.messagesService.create(user.id, groupId, message);
  }

  @Delete(':id')
  async remove(@Param('id') messageId: number) {
    return this.messagesService.remove(messageId);
  }
}
