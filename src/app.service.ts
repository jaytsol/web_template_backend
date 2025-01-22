import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Role } from './contracts/enums/roles.enum';
import { Roles } from './common/decorators/roles.decorator';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  @Roles(Role.Admin)
  async getHello() {
    await this.cacheManager.set('cached_item', { key: 32 });
    const cachedItem = await this.cacheManager.get('cached_item');
    console.log(cachedItem);

    return 'Hello World!';
  }
}
