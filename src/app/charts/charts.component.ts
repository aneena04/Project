import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'myHighchart';
   
  data = [{
          name: 'Cognizant',
          data: [500, 700, 555, 655, 1055, 877, 944, 567, 666, 789, 456, 654]
       },{
          name: 'HDFC',
          data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
       }];
 
  highcharts = Highcharts;
  chartOptions = {   
    chart: {
       type: "column"
    },
    title: {
       text: "Monthly Stock Price"
    },
    xAxis:{
       categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {          
       title:{
          text:"Stock Price"
       } 
    },
    series: this.data
  };

}
