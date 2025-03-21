import { User } from "../entities/user.entity";

export interface ReadUserService{
    findOneByUuid(uuid: string): Promise<User>;
}