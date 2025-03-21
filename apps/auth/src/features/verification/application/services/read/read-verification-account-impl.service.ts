import { Injectable } from '@nestjs/common';

@Injectable()
export class ReadVerificationAccountImplService {
  isDateExpired(expirationDate: Date): boolean {
    const currentDate = new Date();
    return currentDate > expirationDate;
  }
}
