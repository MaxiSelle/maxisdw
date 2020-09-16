import { LoadmenuService } from './services/loadmenu.service';
import { Component } from '@angular/core';
import { Tags } from './classes/Tags';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router, public loadmenuService:LoadmenuService){

  }
 title="maxisdw";

 public keys: string[] = Object.keys(Tags).map(key => Tags[key])
 .filter(value => typeof value === 'string') as string[];

public DepartmentClick(type:string): void {
 this.router.navigateByUrl("/department/"+type);

}

}
