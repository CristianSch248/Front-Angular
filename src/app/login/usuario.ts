export class Usuario{
  email: string | undefined;
  senha: string | undefined;
  token: string | undefined;
  permissao: string | undefined;

  constructor(email?: string, senha?: string, token?: string, permissao?: string) {
    this.email = email;
    this.senha = senha;
    this.token = token;
    this.permissao = permissao;
  }
}
