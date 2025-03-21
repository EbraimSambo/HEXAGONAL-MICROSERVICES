import { User } from "apps/auth/src/features/user/domain/entities/user.entity";

export class UserCreatedEvent {
    constructor(
      public readonly user: User
    ) {}
  }