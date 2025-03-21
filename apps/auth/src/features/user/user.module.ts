import { Module } from '@nestjs/common';
import { CreateUserRepositoryImpl } from './adapters/out/repositories/create/create-user-repository-impl.provider';
import { CreateUserServiceImpl } from './application/services/create-user-service-impl.service';
import { CreateUserController } from './adapters/in/controllers/create/create-user.controller';
import { DatabaseModule } from '../../root/application/database/database.module';
import { ReadUserRepositoryImpl } from './adapters/out/repositories/read/read-user-repository.provider';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    CreateUserController
  ],
  providers: [
    CreateUserRepositoryImpl,
    CreateUserServiceImpl,
    ReadUserRepositoryImpl
  ],
  exports: []
})
export class UserModule {}
