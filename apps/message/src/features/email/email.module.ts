import { Module } from '@nestjs/common';
import { EmailController } from './adapters/in/email.controller';
import { EmailService } from './application/services/email.service';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
