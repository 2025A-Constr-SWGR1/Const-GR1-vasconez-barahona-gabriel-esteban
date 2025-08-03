import { Controller, Get, Query } from '@nestjs/common';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
    constructor(private readonly calcService: CalcService) {}

    @Get('sumar')
    sumar(@Query('a') a: string, @Query('b') b: string) {
        return { resultado: this.calcService.sumar(+a, +b) };
    }

    @Get('restar')
    restar(@Query('a') a: string, @Query('b') b: string) {
        return { resultado: this.calcService.restar(+a, +b) };
    }

    @Get('dividir')
    dividir(@Query('a') a: string, @Query('b') b: string) {
        return { resultado: this.calcService.dividir(+a, +b) };
    }

    @Get('multiplicar')
    multiplicar(@Query('a') a: string, @Query('b') b: string) {
        return { resultado: this.calcService.multiplicar(+a, +b) };
    }
}