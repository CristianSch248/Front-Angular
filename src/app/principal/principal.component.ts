import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login/login.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit  {
  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  logout():void{
    this.service.logout();
  }
}
