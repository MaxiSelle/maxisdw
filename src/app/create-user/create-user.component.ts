import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private authservice: AuthService) {}

  public name:string="";
  public password:string="";

  ngOnInit(): void {
  }

  async CreateUser(){
    var result  = this.authservice.CreateUser(this.name,this.password);
  }

}
