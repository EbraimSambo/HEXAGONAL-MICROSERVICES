import { Injectable } from '@nestjs/common';
import { ReadUserRepository } from '../../../../domain/repositories/read-user-repository';
import { User } from '../../../../domain/entities/user.entity';
import { DatabaseService } from 'apps/auth/src/root/application/database/services/database.service';

@Injectable()
export class ReadUserRepositoryImpl implements ReadUserRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async findOneByEmail(email: string): Promise<User> {
        return await this.databaseService.user.findUnique({
            where:{
                email
            }
        }) as User;
    }

    async findOneByUuid(uuid: string): Promise<User> {
        return await this.databaseService.user.findUnique({
            where:{
                uuid
            }
        }) as User;
    }
}
