import { Injectable } from '@nestjs/common';
import { Group } from 'src/entities/group.entity';
import { getConnection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async allFor(userId: number): Promise<Group[]> {
    const user = await this.userRepository.findOne({
      relations: ['groups'],
      where: {
        id: userId,
      },
    });
    return user.groups;
  }

  // async

  async groupForContactUser(currentUser: User, contactUser: User) {
    const groupsCurrentUser = await this.allFor(currentUser.id);
    const existingGroup = groupsCurrentUser.find((group) => {
      if (group.users.length !== 2) return;
      for (const user of group.users) {
        if (user.id !== currentUser.id && user.id !== contactUser.id)
          return false;
      }
      return true;
    });
    if (existingGroup != null) return existingGroup;

    // Otherwise create the group
    const newGroup = await this.create(
      `${currentUser.firstName} - ${contactUser.firstName}`,
    );
    await this.addUser(newGroup.id, currentUser);
    await this.addUser(newGroup.id, contactUser);

    return newGroup;
  }

  async create(name: string): Promise<Group> {
    const group = this.groupRepository.create({
      name,
    });
    this.groupRepository.save(group);
    return group;
  }

  async addUser(groupId: number, user: User) {
    const group = await this.groupRepository.findOneOrFail({
      relations: ['users'],
      where: { id: groupId },
    });
    group.users.push(user);
    this.groupRepository.save(group);
    return group;
  }

  async update(groupId: number, newName: string): Promise<Group> {
    const group = await this.groupRepository.findOne(groupId);
    group.name = newName;
    this.groupRepository.save(group);
    return group;
  }

  async remove(groupId: number) {
    const group = await this.groupRepository.findOne(groupId);
    return this.groupRepository.remove(group);
  }
}
