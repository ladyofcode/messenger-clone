import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserStatus } from '@shared/dto/user-dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

type Optional<T> = { [P in keyof T]?: T[P] };

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { email: email } });
  }

  async update(
    id: number,
    updates: Optional<{
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      username: string;
      status: UserStatus;
      statusMessage: string | null;
    }>,
  ) {
    return this.usersRepository.update({ id }, updates);
  }

  async create(
    create: Optional<{
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      username: string;
    }>,
  ) {
    const user = this.usersRepository.create(create);
    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
