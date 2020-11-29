import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'contacts' })
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  @ManyToOne(() => User)
  user1: User;
  @ManyToOne(() => User)
  user2: User;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: any;
}
