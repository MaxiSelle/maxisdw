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

  async loginClick():Promise<void>{
    await this.AuthService.login(this.password);

    if(this.AuthService.isLoggedInbool)
    this.router.navigateByUrl("/home");
  }

}
