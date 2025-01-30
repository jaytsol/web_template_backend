import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserDAO } from './dao/user.dao';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserDAO> {
    return this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<UserDAO[]> {
    return this.userRepository.findAll();
  }

  async findOne(username: string) {
    return this.userRepository.findOne(username);
  }
}
