function validarEmail(email) {
  return email.includes("@");
}

function validarPassword(password) {
  return password.length >= 8;
}

function validarIdade(age) {
  return age >= 18;
}

export function validadorUsuario(usuario) {
  return (
    validarEmail(usuario.email) &&
    validarPassword(usuario.password) &&
    validarIdade(usuario.age)
  );
}
