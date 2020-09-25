import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Thumbs } from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpclient: HttpClient) { }

  public async login(password:string){

    this.LoggedIn.next(await this.httpclient.post<boolean>("https://localhost:44354/api/Authentication/Login",{'password':password}).toPromise());
  }

  public async logout(){
    this.LoggedIn.next(false);
  }

  get isLoggedIn(){
    return this.LoggedIn.asObservable();
  }

  get isLoggedInbool(){
    return this.LoggedIn.value;
  }
}
