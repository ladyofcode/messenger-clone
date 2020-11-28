import { Injectable } from '@nestjs/common';
//@note: I get user model from @models by setting the path in the tsconfig.json "path" property.
import { User } from '@models';

@Injectable()
export class UserService {
  //@Todo: fetch data from DB

  users: Array<User> = [];

  async getAll() {
    return;
  }
}
