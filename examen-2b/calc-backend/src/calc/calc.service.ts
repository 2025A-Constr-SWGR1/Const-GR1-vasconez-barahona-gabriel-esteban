import { Injectable } from '@nestjs/common';
import * as suma from '2025a-swgr1-gevb-suma';

@Injectable()
export class CalcService {
    sumar(a: number, b: number) {
    return suma.suma(a, b);
  }
}