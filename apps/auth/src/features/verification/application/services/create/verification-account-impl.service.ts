import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateUserImplService } from 'apps/auth/src/features/user/application/services/update/update-user-impl.service';
import { ReadVerificationAccountImplService } from '../read/read-verification-account-impl.service';
import { VerificationAccountService } from '../../../domain/services/verification-account-service';
import { DeleteVerificationAccountImpl } from '../../../adapters/out/repositories/delete/delete-verificatin-account-impl.provider';

@Injectable()
export class VerificationAccountImplService implements VerificationAccountService {

  constructor(
    private readonly userService: UpdateUserImplService,
    private readonly readVerificationService: ReadVerificationAccountImplService,
    private readonly verificationRepo: DeleteVerificationAccountImpl
  ) { }


  async verificationAccount(code: string): Promise<{message: string}> {
    const isVerified = await this.readVerificationService.findOneByCode(code);
    const user = await this.userService.verificationEmail(isVerified.identifier);
    this.verificationRepo.delete(isVerified.identifier);
    return{
      message: `Email verified: ${user.email}`
    };
  }

}
