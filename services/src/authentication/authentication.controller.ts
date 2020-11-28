import { Controller, Body, UseGuards, Post, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request) {
    return { user: req.user };
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    req.logout();
  }

  @Post('register')
  async register(
    @Body('firstName') firstName,
    @Body('lastName') lastName,
    @Body('email') email,
    @Body('password') password,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    this.userService.create({ firstName, lastName, email, password });
    res.send();
  }
}
