import { Exclude } from 'class-transformer';

export class UserEntity {
  @Exclude()
  __v: unknown;

  @Exclude()
  v: unknown;

  @Exclude()
  password: string;

  username: string;
  email: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
