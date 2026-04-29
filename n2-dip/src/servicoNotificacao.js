export class ServicoNotificacao {
  constructor(gatewayEmail) {
    this.gatewayEmail = gatewayEmail;
  }
  async enviarBoasVindas(usuario) {
    return await this.gatewayEmail.enviar(usuario.email, "Bem-vindo!");
  }
}
class GatewayEmailFake {
  async enviar(email, mensagem) {
    return true;
  }
}