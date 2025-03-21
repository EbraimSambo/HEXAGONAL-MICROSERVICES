import {
  Body,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserServiceImpl } from '../../../../application/services/create-user-service-impl.service';
import { CreateUserDto } from '../../../out/dto/create-user.dto';
import { UserCreatedInterceptor } from 'apps/auth/src/root/interceptors/user-create.nterceptor';

@Controller('user/create')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserServiceImpl) {}

  @Post()
  @UseInterceptors(UserCreatedInterceptor)
  async execute(@Body() body: CreateUserDto) {
    return await this.createUserService.create(body);
  }
}
