import { IsNumber, IsString } from 'class-validator';

export class ConvertCurrencyDto {
  @IsNumber()
  amount: number;

  @IsString()
  from: string;

  @IsString()
  to: string;
}
