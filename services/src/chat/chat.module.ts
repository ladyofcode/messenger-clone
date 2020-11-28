import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from 'src/entities/group.entity';
import { Message } from 'src/entities/message.entity';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Group, User])],
  controllers: [MessagesController, GroupsController],
  providers: [MessagesService, GroupsService, UserService],
})
export class MessagesModule {}
