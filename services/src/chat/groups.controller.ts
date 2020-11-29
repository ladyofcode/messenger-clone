import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateGroupDTO, UpdateGroupDTO } from '@shared/dto/group-dto';
import { SessionGuard } from 'src/authentication/session.guard';
import { CurrentUser } from 'src/authentication/user.decorator';
import { User } from 'src/entities/user.entity';
import { EventService } from 'src/events/event.service';
import { UserPipe } from 'src/user/user.pipe';
import { GroupsService } from './groups.service';

@UseGuards(SessionGuard)
@Controller('groups')
export class GroupsController {
  constructor(
    private groupsService: GroupsService,
    private eventService: EventService,
  ) {}

  @Get()
  async allForCurrentUser(@CurrentUser() currentUser: User) {
    return await this.groupsService.allFor(currentUser.id);
  }

  @Post()
  async create(@Body() { name }: CreateGroupDTO) {
    return this.groupsService.create(name);
  }

  @Get('contacts/:id')
  groupForContactUser(
    @CurrentUser() currentUser: User,
    @Param('id', UserPipe) contactUser: User,
  ) {
    if (contactUser.id === currentUser.id)
      throw new BadRequestException("Can't make a group with yourself");
    return this.groupsService.groupForContactUser(currentUser, contactUser);
  }

  @Post('/:id/nudge')
  async nudge(@CurrentUser() user: User, @Param('id') groupId: number) {
    this.sendEventToGroup(groupId, 'nudge', { senderId: user.id }, user.id);
  }

  @Post('/:id/start-typing')
  async startTyping(@CurrentUser() user: User, @Param('id') groupId: number) {
    this.sendEventToGroup(
      groupId,
      'start-typing',
      { senderId: user.id },
      user.id,
    );
  }

  @Post('/:id/stop-typing')
  async stopTyping(@CurrentUser() user: User, @Param('id') groupId: number) {
    this.sendEventToGroup(
      groupId,
      'stop-typing',
      { senderId: user.id },
      user.id,
    );
  }

  @Post(':groupId/users')
  async join(
    @Param('groupId') groupId: number,
    @CurrentUser() currentUser: User,
  ) {
    return this.groupsService.addUser(groupId, currentUser);
  }

  @Put(':id')
  async update(@Body() { name }: UpdateGroupDTO, @Param('id') groupId: number) {
    return this.groupsService.update(groupId, name);
  }

  @Delete(':id')
  async remove(@Param('id') groupId: number) {
    return this.groupsService.remove(groupId);
  }

  private async sendEventToGroup(
    groupId: number,
    name: string,
    message: any,
    senderId: number,
  ) {
    const usersInGroup = await this.groupsService.allUsersIn(groupId);
    const userIds = usersInGroup
      .map((u) => u.id)
      .filter((uid) => uid !== senderId);
    this.eventService.sendEventToUsersIfAvailable(userIds, name, message);
  }
}
