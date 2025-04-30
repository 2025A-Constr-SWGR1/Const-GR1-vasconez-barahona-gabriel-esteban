import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    // console.log('log!');
    // console.debug('debug!');
    // console.info('info!');
    console.warn('warn!');
    console.error('error!');
    return 'Hello World!';
=======
    return '¡Hola, mundo!';
>>>>>>> 012ed17303a8b54aba1704788389345792f15511
  }
}
