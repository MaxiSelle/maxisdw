import { ItemsService, IItem,IPicture } from './../services/items.service';
import { Tags } from './../classes/Tags';
import { Component, OnInit } from '@angular/core';
import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private itemservice: ItemsService) { }

  selectedFiles: string[];
  public keys: string[] = Object.keys(Tags).map(key => Tags[key])
    .filter(value => typeof value === 'string') as string[];

  public sizes: string[] = ["S", "M", "L", "XL"];

  public name: string = "";
  public brand: string = "";
  public size: string = "";
  public color: string = "";
  public tag: Tags.Hoodie;
  public selectedtag:string="";

  public conf1 = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }


  onFileSelected(event) {

    this.selectedFiles = [];
    this.readFiles(event.target.files)

  }

  readFiles(images: any[]): void {
    let i = 0;
    for (i; i < images.length; i++) {
      var reader = new FileReader();
      reader.onloadend = (event: any) => {
        this.selectedFiles.push(event.target.result as string);
      }

      console.log(this.selectedFiles);
      reader.readAsDataURL(images[i]);
    }

  }

  onUpload() {
    var itemToUpload:IItem={brand:this.brand,color:this.color,name:this.name,tag:Tags[this.selectedtag],size:this.size};
    var picturestToUpload:IPicture[]= new Array();

    this.selectedFiles.forEach(file => {
      var current: IPicture={data:file};
      picturestToUpload.push(current);
    });
    itemToUpload.pictures=picturestToUpload;

    this.itemservice.addItem(itemToUpload);
  }

  ngOnInit(): void {
  }

}
