import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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

  @Column('timestamp')
  createdAt: any;
}
