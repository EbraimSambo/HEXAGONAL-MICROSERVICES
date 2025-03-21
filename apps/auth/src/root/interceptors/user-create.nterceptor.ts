// interceptors/user-created.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { User } from '../../features/user/domain/entities/user.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserCreatedEvent } from '../application/events/user/core/user-event';

@Injectable()
export class UserCreatedInterceptor implements NestInterceptor {
  constructor(
    private readonly eventEmitter: EventEmitter2
  ) { }
  private readonly logger = new Logger(UserCreatedInterceptor.name, { timestamp: true });
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(async (user: User) => {
        if (user) {
          this.logger.debug('📤 Usuario criado com sucesso...');
          this.eventEmitter.emit(
            'user.created',
            new UserCreatedEvent(user),
          );
        }
      }),
    );
  }
}