# Transformador de Moneda - NestJS

Este es un aplicativo sencillo que convierte monedas (USD, EUR, GBP) usando NestJS. La conversión se realiza localmente con tasas de cambio fijas para efectos demostrativos.

## Endpoint

### POST `/currency/convert`

**Ejemplo de cuerpo de solicitud:**

```json
{
  "amount": 100,
  "from": "USD",
  "to": "EUR"
}
```

**Respuesta esperada:**

```json
{
  "amount": 100,
  "from": "USD",
  "to": "EUR",
  "result": 85
}
```

---

## Principios de Clean Code aplicados

Basado en: [Clean Code JavaScript (Versión traducida)](https://github.com/andersontr15/clean-code-javascript-es)

| Principio                                    | Archivo(s) aplicados                             |
| -------------------------------------------- | ------------------------------------------------ |
| Nombres significativos                       | `currency.service.ts`, `convert-currency.dto.ts` |
| Funciones con una sola responsabilidad       | `currency.service.ts`                            |
| Argumentos de funciones limitados (máx. 2)   | `currency.service.ts`, `currency.controller.ts`  |
| Eliminación de código duplicado              | `currency.service.ts`                            |
| Evitar efectos colaterales                   | `currency.service.ts`                            |
| Clases bien definidas (SRP)                  | `CurrencyService`, `CurrencyController`          |
| Uso de DTO para encapsular y validar datos   | `convert-currency.dto.ts`                        |
| Validación de entrada con `ValidationPipe`   | `main.ts`                                        |
| Composición sobre herencia                   | `AppModule` compone `CurrencyModule`             |
| Nombres de funciones que explican su función | `convertCurrency` en `CurrencyService`           |

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repo>
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar la aplicación:

   ```bash
   npm run start:dev
   ```

4. Probar el endpoint en Postman o cURL:

   ```bash
   curl -X POST http://localhost:3000/currency/convert \
     -H "Content-Type: application/json" \
     -d '{"amount":100,"from":"USD","to":"EUR"}'
   ```
