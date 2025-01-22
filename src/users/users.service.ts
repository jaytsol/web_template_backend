import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

export type User = any;

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.usersRepository.create(createUserDto);
  }
}
