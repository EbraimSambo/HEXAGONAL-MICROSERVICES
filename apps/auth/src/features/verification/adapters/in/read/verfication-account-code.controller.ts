import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { ReadVerificationAccountImplService } from '../../../application/services/read/read-verification-account-impl.service';
import { VerificationCodeDto } from '../../dto/verification-code.dto';

@Controller('verification/account')
export class VerificationAccountCodeController {
  constructor(
    private readonly verificationAccountService: ReadVerificationAccountImplService
  ){}
  
  @Post()
  verification(@Body() body: VerificationCodeDto) {
    return this.verificationAccountService.findOneByCode(body.code);
  }

}
