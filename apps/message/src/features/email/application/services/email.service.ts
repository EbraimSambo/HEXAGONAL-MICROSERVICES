import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from '../../adapters/out/dto/create-email.dto';
import { resend } from '../config/config-resend';

@Injectable()
export class EmailService {
  async create(body: CreateEmailDto) {
    console.log(body)
    return await resend.emails.send({
      from: `App Task <onboarding@resend.dev>`,
      to: ['ebraimsambo@gmail.com'],
      subject: 'Conta criada com sucesso',
      html: `<strong>Codigo de verficação: ${body.code} </strong>`,
    });
  }
}
