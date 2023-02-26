import { Medico } from "../medico/medico";
import { Paciente } from "../paciente/paciente";

export class Consulta{
  id: number | undefined;
  data!: string | undefined;
  hora!: string | undefined;
  caso!: string | undefined;
  paciente!: Paciente;
  medico!: Medico;
  status!: boolean | undefined;

  constructor(id?: number, data?: string, hora?: string, paciente?: Paciente, medico?: Medico, status?: boolean){
    this.id = id;
    this.data = data;
    this.hora = hora;
    this.paciente = <Paciente>paciente;
    this.medico = <Medico>medico;
    this.status = status;

  }

}


export class CadastroConsulta{

  data!: string | undefined;
  hora!: string | undefined;
  caso!: string | undefined;
  paciente!: number | undefined;
  medico!: number | undefined;
  status!: boolean | undefined;

  constructor( data?: string, hora?: string, paciente?: number, medico?: number, caso?: string ){
    this.data = data;
    this.hora = hora;
    this.paciente = paciente;
    this.medico = medico;
    this.caso = caso;

  }
}
