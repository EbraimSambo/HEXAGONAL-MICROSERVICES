import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
