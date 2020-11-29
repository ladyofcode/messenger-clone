import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'gateway_keys' })
export class GatewayKey {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => User, (user) => user.gatewayKeys)
  user: User;

  @Column()
  token: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: any;
}
