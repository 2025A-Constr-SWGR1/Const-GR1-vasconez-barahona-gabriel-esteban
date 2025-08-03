import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalcModule } from './calc/calc.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CalcModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // apunta a la carpeta donde está index.html
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
