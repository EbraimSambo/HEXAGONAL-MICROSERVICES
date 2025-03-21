import { Module } from '@nestjs/common';
import { CreateVerificationAccountImplService } from './application/services/create/create-verification-account-impl.service';
import { CreateVerificationAccountRepositoryImpl } from './adapters/out/repositories/verification-account-repository-impl.provider';
import { DatabaseModule } from '../../root/application/database/database.module';
import { VerificationAccountCodeController } from './adapters/in/read/verfication-account-code.controller';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    VerificationAccountCodeController 
  ],
  providers: [
    CreateVerificationAccountImplService,
    CreateVerificationAccountRepositoryImpl
  ],
  exports: [
    CreateVerificationAccountImplService
  ]
})
export class VerificationModule {}
