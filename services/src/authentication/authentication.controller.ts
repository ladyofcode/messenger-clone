import {
  Controller,
  Body,
  UseGuards,
  Post,
  Req,
  Res,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { Response, Request } from 'express';
import { RegisterDTO } from '@shared/dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request) {
    req.session['userId'] = req.user['id'];
    req.session.save();

    return { user: req.user };
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    req.session.destroy(() => {});
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
