import { Injectable } from '@nestjs/common';
import { Group } from 'src/entities/group.entity';
import { Repository } from 'typeorm';
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
