import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
      status: string;
    }>,
  ) {
    return this.usersRepository.update({ id }, updates);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
