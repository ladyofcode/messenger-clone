import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateGroupDTO, UpdateGroupDTO } from '@shared/dto/group-dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Get()
  async allForCurrentUser() {
    return await this.groupsService.allFor(1);
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
