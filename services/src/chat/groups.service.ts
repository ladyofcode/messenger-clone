import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Group } from 'src/entities/group.entity';

@Injectable()
export class GroupsService {
  async allFor(userId: number): Promise<Group[]> {
    return [];
  }

  async create(name: string): Promise<Group> {
    return null;
  }

  async update(groupId: number, newName: string): Promise<Group> {
    return null;
  }

  async remove(groupId: number) {
    return null;
  }
}
