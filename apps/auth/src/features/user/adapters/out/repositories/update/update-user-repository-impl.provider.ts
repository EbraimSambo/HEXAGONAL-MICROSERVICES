import { Injectable } from '@nestjs/common';
import { UpdateUserRepository } from '../../../../domain/repositories/update-user-repository';
import { User } from '../../../../domain/entities/user.entity';
import { DatabaseService } from 'apps/auth/src/root/application/database/services/database.service';

@Injectable()
export class UpdateUserRepositoryImpl implements UpdateUserRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async verificationEmail(userUuid: string): Promise<User> {
        const newDateVerification = new Date()
        return await this.databaseService.user.update({
            where: {
                uuid: userUuid
            },
            data: {
                emailVerified: newDateVerification
            }
        }) as User;
    }
}
