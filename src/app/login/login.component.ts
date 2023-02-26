import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { Usuario } from "./usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private service: LoginService) { }

  usuario: Usuario = new Usuario();

  ngOnInit(): void {
    console.log(this.usuario);
  }

  logar(): void{
    this.service.login(this.usuario).subscribe( u =>{
      console.log('usuario ---> '+u.token)
      this.service.setarUsuarioLogado(u);
      this.router.navigate(['/principal']);
    })
  }
}
