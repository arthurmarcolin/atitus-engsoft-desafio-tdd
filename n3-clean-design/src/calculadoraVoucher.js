export function calcularDesconto(codigo, valor) {

  if (valor <= 0) {
    return 0;
  }

  if (codigo === "DESC10") {
    return valor * 0.10;
  }

  if (codigo === "DESC20") {
    return valor * 0.20;
  }

  if (codigo === "FIXO50") {
    if (valor < 50) {
      return valor;
    }

    return 50;
  }
  return 0;
}

