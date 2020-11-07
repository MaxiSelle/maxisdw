import { Tags } from './../classes/Tags';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StatData} from '../classes/Utilities'

@Injectable({
  providedIn: 'root'
})


export class ItemsService {

  constructor(private httpclient: HttpClient) { }

  getItemById(id: number): Promise<IItem> {
    return this.httpclient.get<IItem>("https://localhost:44354/ClothingItem/"+id).toPromise();
  }
  public async getAllItems(): Promise<IItem[]> {
    return await this.httpclient.get<IItem[]>("https://localhost:44354/ClothingItem/all").toPromise()
  }

  public async getItemsByDepartment(department: string): Promise<IItem[]> {
    return await this.httpclient.get<IItem[]>("https://localhost:44354/ClothingItem/department/"+department).toPromise();
  }

  public async addItem(item: IItem): Promise<IItem> {
    return await this.httpclient.post<IItem>("https://localhost:44354/ClothingItem",item).toPromise();
  }
  public  getStatData():Observable<StatData[]>{
    return  this.httpclient.get<StatData[]>("https://localhost:44354/Stats");
  }
}

export interface IItem {
  brand: string,
  name: string,
  color:string,
  clothingItemId?:number,
  pictures?: IPicture[],
  size:string,
  tag: Tags
}
export interface IPicture{
  data:string
}
