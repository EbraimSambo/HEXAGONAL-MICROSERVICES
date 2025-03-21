import { Injectable } from '@nestjs/common';
import { ReadUVerificationAccountRepository } from '../../../../domain/repositories/read-verification-account-repository';
import { VerificationAccount } from '../../../../domain/entities/verification-account.entity';
import { DatabaseService } from 'apps/auth/src/root/application/database/services/database.service';

@Injectable()
export class ReadVerificationAccountRepositoryImpl implements ReadUVerificationAccountRepository {

    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async findOneByCode(code: string): Promise<VerificationAccount> {
        return await this.databaseService.verificationAccount.findUnique({
            where:{
                code
            }
        }) as VerificationAccount;
    }
}
