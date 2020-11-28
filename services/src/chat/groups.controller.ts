import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateGroupDTO,
  UpdateGroupDTO,
} from '../../../common/src/dto/group-dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Get()
  async allForCurrentUser() {
    // TODO: get user from auth
    const user = null;
    return this.groupsService.allFor(user);
  }

  @Post()
  async create(@Body() { name }: CreateGroupDTO) {
    return this.groupsService.create(name);
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
