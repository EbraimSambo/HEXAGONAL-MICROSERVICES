import { Module } from '@nestjs/common';
import { CreateUserRepositoryImpl } from './adapters/out/repositories/create/create-user-repository-impl.provider';
import { CreateUserServiceImpl } from './application/services/create-user-service-impl.service';
import { CreateUserController } from './adapters/in/controllers/create/create-user.controller';
import { DatabaseModule } from '../../root/application/database/database.module';
import { ReadUserRepositoryImpl } from './adapters/out/repositories/read/read-user-repository.provider';
import { UpdateUserImplService } from './application/services/update/update-user-impl.service';
import { UpdateUserRepositoryImpl } from './adapters/out/repositories/update/update-user-repository-impl.provider';

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
    ReadUserRepositoryImpl,
    UpdateUserImplService,
    UpdateUserRepositoryImpl
  ],
  exports: [
    UpdateUserImplService
  ]
})
export class UserModule {}
