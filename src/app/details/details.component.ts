import { ItemsService, IItem } from './../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public item:IItem;
  constructor(private itemsService: ItemsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.getItem(id);
  }

   async getItem(id:number){
    this.item=await this.itemsService.getItemById(id);
  }

  public conf1 = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
}
