import { ItemsService, IItem } from './../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private itemsservice: ItemsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  public items: IItem[]

  ngOnInit(): void {

       this.router.events.subscribe((e: any) => {
       if (e instanceof NavigationEnd)
         this.getItems();
      })
      this.getItems();
  }

  public itemClicked(id: number): void {
    this.router.navigateByUrl("/details/" + id)
  }

  public async getItems() {
    let route = this.activatedRoute.snapshot.url[0].path;
    if (route == "home")
      this.items =await this.itemsservice.getAllItems();
    else if (route == "department")
      this.items = await this.itemsservice.getItemsByDepartment(this.activatedRoute.snapshot.params.item);
  }


}
