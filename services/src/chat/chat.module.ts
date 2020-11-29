import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from 'src/entities/group.entity';
import { Message } from 'src/entities/message.entity';
import { User } from 'src/entities/user.entity';
import { EventModule } from 'src/events/event.module';
import { UserPipe } from 'src/user/user.pipe';
import { UserService } from 'src/user/user.service';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [EventModule, TypeOrmModule.forFeature([Message, Group, User])],
  controllers: [MessagesController, GroupsController],
  providers: [MessagesService, GroupsService, UserService, UserPipe],
})
export class MessagesModule {}
