import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Server } from 'socket.io';
import { GatewayKey } from 'src/entities/gatewaykey.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

interface AuthenticatedUser {
  userId: number;
  socketIds: string[];
}

type AuthenticatedUsers = { [userId: string]: AuthenticatedUser };

@Injectable()
export class EventService {
  public server: Server = null;

  private authenticatedUsers: AuthenticatedUsers = {};

  constructor(
    private userService: UserService,
    @InjectRepository(GatewayKey)
    private gatewayKeyRepository: Repository<GatewayKey>,
  ) {}

  createGatewayToken(userId: number) {
    const key = this.gatewayKeyRepository.create({
      token: uuidv4(),
      user: { id: userId },
    });
    return this.gatewayKeyRepository.save(key);
  }

  async authenticateSocket(token: string, socketId: string) {
    const key = await this.keyForToken(token);
    if (key == null) return null;

    this.addAuthedUser(key.user.id, socketId);

    return key.user;
  }

  async userForSocketId(socketId: string) {
    const authedUser = Object.values(this.authenticatedUsers).find(
      (authedUser) => {
        return authedUser.socketIds.some((si) => si === socketId);
      },
    );
    if (authedUser == null) return null;
    return this.userService.findOne(authedUser.userId);
  }

  private keyForToken(token: string) {
    return this.gatewayKeyRepository.findOne({
      relations: ['user'],
      where: { token },
    });
  }

  private addAuthedUser(userId: number, socketId: string) {
    if (this.authenticatedUsers[userId] == null) {
      this.authenticatedUsers[userId] = { userId, socketIds: [socketId] };
    } else {
      this.authenticatedUsers[userId].socketIds.push(socketId);
    }
  }
}
