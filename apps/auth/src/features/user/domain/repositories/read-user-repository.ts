import { User } from "../entities/user.entity";

export interface ReadUserRepository{
    findOneByEmail(email: string): Promise<User>
}