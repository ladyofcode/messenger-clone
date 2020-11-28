import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  validateUser(username: string, password: string) {
    return true;
  }
}
