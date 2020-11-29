import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Socket } from 'socket.io';
import { EventService } from './event.service';

@Injectable()
export class EventGuard implements CanActivate {
  constructor(private eventService: EventService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const socket = context.switchToWs().getClient() as Socket;

    const user = this.eventService.userForSocketId(socket.id);
    if (user == null) throw new WsException('unauthorized');

    socket['user'] = user;
    return true;
  }
}
