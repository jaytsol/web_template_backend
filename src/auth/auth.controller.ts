import {
  Request,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';
import { Role } from 'src/contracts/enums/roles.enum';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDTO, SignUpDTO } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() payload: LoginDTO) {
    return this.authService.signIn(payload);
  }

  @HttpCode(HttpStatus.CREATED)
  @Public()
  @Post('signup')
  signUp(@Body() payload: SignUpDTO) {
    return this.authService.signUp(payload);
  }

  @ApiBearerAuth()
  @Roles(Role.Admin, Role.User)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
