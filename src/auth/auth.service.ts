import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDAO, SignUpDAO } from './dao/auth.dao';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(input: LoginDAO): Promise<{ access_token: string }> {
    const user = await this.userService.findByUserName(input.username);

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
    const hashedPassword = async (password) => {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      return await bcrypt.hash(password, salt);
    };

    return await this.userService.create({
      ...input,
      password: await hashedPassword(input.password),
    });
  }
}
