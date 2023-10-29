import { JwtService } from '@nestjs/jwt';
import { CanActivate, Injectable, UnauthorizedException } from '@nestjs/common';
import { CookieService } from './cookie/cookie.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExutionContext) {
    const req = context.switchToHttp().getRequest() as Request;
    const token = req.cookies[CookieService.tokenKey];
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const sessionInfo = this.JwtService.verifyAsync(token, {
        secret: process.env.JWT_KEY,
      });
    } catch (e) {}
  }
}
