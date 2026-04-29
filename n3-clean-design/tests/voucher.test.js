import { calcularDesconto } from "./calcularDesconto";

describe("calcularDesconto", () => {
  test("deve retornar 0 quando o código for inválido", () => {
    expect(calcularDesconto("INVALIDO", 100)).toBe(0);
  });

  test("deve aplicar 10% de desconto para o voucher DESC10", () => {
    expect(calcularDesconto("DESC10", 100)).toBe(10);
  });

  test("deve aplicar 20% de desconto para o voucher DESC20", () => {
    expect(calcularDesconto("DESC20", 100)).toBe(20);
  });

  test("deve aplicar desconto fixo de 50 reais para o voucher FIXO50", () => {
    expect(calcularDesconto("FIXO50", 200)).toBe(50);
  });

  test("não deve permitir desconto maior que o valor da compra", () => {
    expect(calcularDesconto("FIXO50", 30)).toBe(30);
  });

  test("deve retornar 0 se o valor for menor ou igual a zero", () => {
    expect(calcularDesconto("DESC10", 0)).toBe(0);
    expect(calcularDesconto("DESC10", -100)).toBe(0);
  });
});