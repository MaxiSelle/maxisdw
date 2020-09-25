import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Tags } from './classes/Tags';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, public AuthService: AuthService) {

  }

  ngOnInit(): void {
    this.isLoggedIn$=this.AuthService.isLoggedIn;

}

  searchtext="";
  title = "maxisdw";
  isLoggedIn$: Observable<boolean>;

  public keys: string[] = Object.keys(Tags).map(key => Tags[key])
    .filter(value => typeof value === 'string') as string[];

  public DepartmentClick(type: string): void {
    this.router.navigateByUrl("/department/" + type)
  }
  public logoutClick():void{
    this.AuthService.logout();
    this.router.navigateByUrl("/login");
  }

  public SearchClick():void{
    this.router.navigateByUrl("/department/Tee");
  }

}

