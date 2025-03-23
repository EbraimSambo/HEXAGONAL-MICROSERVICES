import {
  Body,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from 'apps/auth/src/features/user/adapters/out/dto/create-user.dto';
import { AuthRegisterService } from '../../../application/services/auth-register/auth-register.service';
import { UserCreatedInterceptor } from 'apps/auth/src/root/interceptors/user-create.interceptor';

@Controller('auth/register')
export class AuthRegisterController {
  constructor(private readonly authRegisterService: AuthRegisterService) {}

  @Post()
  @UseInterceptors(UserCreatedInterceptor)
  async create(@Body() body: CreateUserDto) {
    return await this.authRegisterService.register(body);
  }

}
