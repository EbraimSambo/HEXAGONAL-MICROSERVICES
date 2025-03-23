import { Module } from '@nestjs/common';
import { EmailModule } from './features/email/email.module';

@Module({
  imports: [EmailModule],
})
export class MessageModule {}
