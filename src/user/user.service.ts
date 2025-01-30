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

  async findOne(id: string): Promise<UserDAO> {
    return this.userRepository.findById(id);
  }

  async findAll(): Promise<UserDAO[]> {
    return this.userRepository.findAll();
  }
}
