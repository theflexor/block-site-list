import {
  Controller,
  Get,
  Post,
  HttpStatus,
  HttpCode,
  Body,
  Res,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { SignUpBodyDto } from './dto';
import { AuthService } from './auth.service';
import { CookieService } from './cookie/cookie.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
  ) {}
  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(
    @Body() body: SignUpBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(
      body.email,
      body.password,
    );
    this.cookieService.setToken(res, accessToken);
    return { accessToken };
  }

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  signIn() {}

  @Post('sign-out')
  @HttpCode(HttpStatus.OK)
  signOut() {}

  @Get('session')
  getSessionInfo() {}
}
