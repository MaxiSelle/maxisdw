import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { ItemsService } from '../services/items.service';
import { StatData } from '../classes/Utilities';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-stats-site',
  templateUrl: './stats-site.component.html',
  styleUrls: ['./stats-site.component.scss']
})

export class StatsSiteComponent implements OnInit {

  constructor(private itemsservice: ItemsService) {
    this.itemsservice.getStatData().subscribe(result=>{
      result.map(x=>{
        this.labels.push(x.tag);
        this.counts.push(x.count);
        this.itemcounttexts.push("You have "+x.count+" "+x.tag+"s");
      });     
    });
    this.doughnutChartLabels=this.labels;
    this.doughnutChartData=[this.counts];
    this.loadrdy=true;
   }

  itemcounttexts:string[]=[];


  statdata$ : Observable<StatData[]>;
  labels:string[]=[];
  counts:number[]=[];
  loadrdy: boolean=false;
  

  //chart creation
  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet;

  public chartColors: any[] = [
    { 
      backgroundColor:["#fcb103", "#030303", "#3898a1"] 
    }];

  doughnutChartType: ChartType = 'doughnut';

     ngOnInit(): void {
    this.statdata$ = this.itemsservice.getStatData();

}
}
