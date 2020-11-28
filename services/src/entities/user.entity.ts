import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToMany,
} from 'typeorm';
import { Group } from './group.entity';

@Entity({ name: 'users' })
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'offline' })
  status: 'offline' | 'online' | 'away';

  @Column({ nullable: true, default: null })
  statusMessage: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column('timestamp')
  createdAt: any;

  @Column('timestamp')
  updatedAt: Date;

  @ManyToMany(() => Group, (group) => group.users)
  groups: Group[];
}
