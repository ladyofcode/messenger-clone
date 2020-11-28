import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private userService: UserService) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    if (value == null) throw new BadRequestException();
    const user = this.userService.getOne(value);
    if (user == null) throw new NotFoundException();
    return user;
  }
}
