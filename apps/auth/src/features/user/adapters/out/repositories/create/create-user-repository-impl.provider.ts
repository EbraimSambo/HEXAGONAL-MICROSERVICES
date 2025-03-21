import { Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../../../../domain/repositories/create-user-repository';
import { DatabaseService } from 'apps/auth/src/root/application/database/services/database.service';
import { User } from '../../../../domain/entities/user.entity';

@Injectable()
export class CreateUserRepositoryImpl implements CreateUserRepository{
    constructor(
        private readonly databaseService: DatabaseService
    ){}
    async save(user: User): Promise<User> {
        const newUser = await this.databaseService.user.create({
            data:{
                ...user
            } 
        }) as User;
        
        return {...newUser}
    }
}
