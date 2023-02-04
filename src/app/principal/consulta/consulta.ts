import { Medico } from "../medico/medico";
import { Paciente } from "../paciente/paciente";

export class Consulta{
  id: number | undefined;
  data!: string | undefined;
  hora!: string | undefined;
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
