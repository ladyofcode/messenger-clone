import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const userId = request['session']['userId'];
    if (userId != null) {
      const user = this.userService.findOne(userId);
      if (user == null) return false;
      request['user'] = user;
      return true;
    }
    return false;
  }
}
