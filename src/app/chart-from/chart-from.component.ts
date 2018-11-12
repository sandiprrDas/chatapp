import { Component, OnInit } from '@angular/core';
import {ChartService} from '../services/chart.service'

@Component({
  selector: 'app-chart-from',
  templateUrl: './chart-from.component.html',
  styleUrls: ['./chart-from.component.css']
})
export class ChartFromComponent implements OnInit {
  message:string;
  constructor( private chart: ChartService ) { }
  ngOnInit() {
  }
  send(){
    this.chart.sendMessage(this.message);
    this.message='';
  }
  
  handleSubmit(event){
    if(event.keyCode === 13){
      this.send();
    }
  }

}
