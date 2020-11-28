import { Entity, Column } from 'typeorm';

@Entity()
export class Contact {
  @Column()
  user1: any;
  @Column()
  user2: any;

  @Column('timestamp')
  createdAt: any;
}
