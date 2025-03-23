import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateEmailDto } from '../out/dto/create-email.dto';
import { EmailService } from '../../application/services/email.service';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern('email_send_code') 
  create(@Payload() createEmailDto: CreateEmailDto) {
    return this.emailService.create(createEmailDto);
  }

}
