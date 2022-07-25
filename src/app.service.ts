import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getToBeSpy(): string {
    return 'non-spy';
  }
}
