export class Hospital{
  id: number | undefined;
  nome!: string | undefined;
  endereco!: string | undefined;
  email!: string | undefined;
  contato!: string | undefined;

  constructor(id?: number, nome?: string, endereco?: string, email?: string, contato?: string){
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.email = email;
    this.contato = contato;
  }
}
