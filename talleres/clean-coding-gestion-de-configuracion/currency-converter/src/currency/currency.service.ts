import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
  private readonly exchangeRates: Record<string, number> = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
  };

  convertCurrency(amount: number, from: string, to: string): number {
    const amountInUSD = amount / this.exchangeRates[from];
    const result = amountInUSD * this.exchangeRates[to];
    return parseFloat(result.toFixed(2));
  }
}
