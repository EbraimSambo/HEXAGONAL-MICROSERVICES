import { VerificationAccount } from "../entities/verification-account.entity";

export interface CreateVerificationAccountRepository{
    save(verificationAccount: VerificationAccount): Promise<VerificationAccount>
}