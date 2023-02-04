export class Paciente{
  id: number | undefined;
  nome!: string | undefined;
  idade!: number | undefined;
  sexo!: string | undefined;
  cpf!: string | undefined;
  telefone!: string | undefined;


  constructor(id?: number, nome?: string, idade?: number, sexo?: string, cpf?: string, telefone?: string){
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.cpf = cpf;
    this.telefone = telefone;
  }
}
