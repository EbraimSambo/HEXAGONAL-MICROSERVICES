import { Injectable } from "@nestjs/common";
import { CreateVerificationAccountRepository } from "../../../domain/repositories/create-varification-repository";
import { VerificationAccount } from "../../../domain/entities/verification-account.entity";
import { DatabaseService } from "apps/auth/src/root/application/database/services/database.service";
import { generateOTP } from "@eternaljs/otp-generator";

@Injectable()
export class CreateVerificationAccountRepositoryImpl implements CreateVerificationAccountRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async save(verificationAccount: VerificationAccount): Promise<VerificationAccount> {
        const code = generateOTP(6);
        const expires = this.generateExpirationDate()
        return await this.databaseService.verificationAccount.create({
            data:{
                ...verificationAccount,
                code,
                expires
            } 
        })
    }

    generateExpirationDate(minutes: number = 5): Date {
        const currentDate = new Date(2025, 2, 20);
        const expirationDate = new Date(currentDate);
        expirationDate.setMinutes(currentDate.getMinutes() + minutes);
        return expirationDate;
    }
}