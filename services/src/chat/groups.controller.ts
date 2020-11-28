import {
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
import { GroupsService } from './groups.service';

@UseGuards(SessionGuard)
@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Get()
  async allForCurrentUser(@CurrentUser() currentUser: User) {
    return await this.groupsService.allFor(currentUser.id);
  }

  @Post()
  async create(@Body() { name }: CreateGroupDTO) {
    return this.groupsService.create(name);
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
}
