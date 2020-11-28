import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Group } from './group.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Group)
  @Column()
  groupId: number;

  @Column()
  senderId: number;

  @Column()
  content: string;
}
