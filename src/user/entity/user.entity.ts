import { Expose } from 'class-transformer';

export class UserEntity {
  @Expose() username: string;
  @Expose() email: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
