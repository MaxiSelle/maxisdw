import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthService, private router:Router) { }

  public password:string="";
  ngOnInit(): void {
  }

  loginClick():void{
    this.AuthService.login(this.password);
    this.router.navigateByUrl("/home");
  }

}
