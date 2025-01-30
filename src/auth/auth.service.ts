import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDAO, SignUpDAO } from './dao/auth.dao';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(input: LoginDAO): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(input.username);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== input.password) {
      throw new BadRequestException('Invalid password');
    }

    const payload = { username: user.username, password: user.password };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(input: SignUpDAO): Promise<any> {
    return await this.usersService.create(input);
  }
}
