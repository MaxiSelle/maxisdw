import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadmenuService {

  constructor() { }

  CheckLoadMenu(route:string):boolean{

    if(route=='/login')
    return false;

    return true;
  }
}
