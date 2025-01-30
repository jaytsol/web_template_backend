import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDAO } from './dao/auth.dao';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(input: LoginDAO): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(input.username);
    if (user?.password !== input.password) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, password: user.password };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
