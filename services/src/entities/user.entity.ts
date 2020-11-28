import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToMany,
  JoinTable,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
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
  password: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: any;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @ManyToMany(() => Group, (group) => group.users)
  groups: Group[];
}
