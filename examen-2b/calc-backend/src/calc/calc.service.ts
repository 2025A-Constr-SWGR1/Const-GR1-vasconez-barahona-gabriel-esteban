import { Injectable } from '@nestjs/common';
import * as suma from 'gabriel';
import * as resta from 'ronny';
import * as division from 'david';
import * as multiplicacion from 'eddy';
@Injectable()
export class CalcService {
    sumar(a: number, b: number) {
      return suma.suma(a, b);
    }

    restar(a: number, b: number) {
      return resta.resta(a, b);
    }

    dividir(a: number, b: number) {
      return division.division(a, b);
    }

    multiplicar(a: number, b: number) {
    return multiplicacion.multiplicacion(a, b);
  }
}