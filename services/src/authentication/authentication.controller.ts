import {
  Controller,
  Body,
  UseGuards,
  Post,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { RegisterDTO } from '@shared/dto';
import { CurrentUser } from './user.decorator';
import { User } from 'src/entities/user.entity';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@CurrentUser() user: User, @Req() req: any) {
    req.session['userId'] = user.id;
    req.session.save();

    return { user: req.user };
  }

  @Post('logout')
  async logout(@Req() req: any) {
    req.session.destroy(() => {
      //
    });
    req.logout();
  }

  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    //@todo validate
    return this.userService.create(registerDTO).catch((e: Error) => {
      throw new BadRequestException(e.message);
    });
  }
}
