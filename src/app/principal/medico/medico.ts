import { Hospital } from "../hospital/hospital";

export class Medico{
  id: number | undefined;
  nome!: string | undefined;
  especialidade!: string | undefined;
  hospital!: Hospital;

  constructor(id?: number, nome?: string, especialidade?: string, hospital?: Hospital){
    this.id = id;
    this.nome = nome;
    this.especialidade = especialidade;
    this.hospital = <Hospital>hospital;
  }
}
