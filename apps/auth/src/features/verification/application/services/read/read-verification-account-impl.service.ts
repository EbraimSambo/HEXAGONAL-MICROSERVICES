import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ReadVerificationAccountRepositoryImpl } from '../../../adapters/out/repositories/read/read-verification-account-repository-impl.provider';
import { ReadVerificationAccountService } from '../../../domain/services/read-verification-account-service';
import { ReadUserImplService } from 'apps/auth/src/features/user/application/services/read/read-user-impl.service';

@Injectable()
export class ReadVerificationAccountImplService implements ReadVerificationAccountService {
  constructor(
    private readonly verificationAccountRepository: ReadVerificationAccountRepositoryImpl,
    private readonly userService: ReadUserImplService
  ){}

  async findOneByCode(code: string) {
    const verificationAccount = await this.verificationAccountRepository.findOneByCode(code);
    
    if (!verificationAccount) {
      throw new NotFoundException('Verification code not found');
    }

    const user = await this.userService.findOneByUuid(verificationAccount.identifier);

    if (user.emailVerified) {
      throw new ConflictException('User already verified');
    }

    if (this.isDateExpired(verificationAccount.expires)) {
      throw new BadRequestException('Verification code has expired');
    }
    
    return verificationAccount;
  }

  isDateExpired(expirationDate: Date): boolean {
    const currentDate = new Date();
    return currentDate > expirationDate;
  }
}
