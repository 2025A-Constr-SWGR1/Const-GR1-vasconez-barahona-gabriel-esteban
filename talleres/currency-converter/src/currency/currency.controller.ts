import { Body, Controller, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { ConvertCurrencyDto } from './dto/convert-currency.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post('convert')
  convert(@Body() dto: ConvertCurrencyDto) {
    const { amount, from, to } = dto;
    const result = this.currencyService.convertCurrency(amount, from, to);
    return { amount, from, to, result };
  }
}
