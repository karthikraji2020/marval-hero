import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Data } from './../../services/models/Data';
import { Chart } from 'chart.js'; 
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  // data: Data[];  
  url = '';  
  votes = [];  
  title = [];  
  ViewChild: any
  barchart :any;  
  // barchart = [];  
  constructor(private http: HttpClient) { }  
  ngOnInit(): void {
    this.renderChart();
}
// load data 
  renderChart() {
    this.barchart = new Chart('canvas', {  
      type: 'bar',  
      data: {  
        labels: ['2016', '2017', '2018', '2019', '2020'],  
        datasets: [
          {
            label: 'Comics Publised',
            backgroundColor: '#3F8CA9',
            borderColor: '#57DCFF',
            borderWidth: 1,
            hoverBackgroundColor: '#3F8CA9',
            hoverBorderColor: '#57DCFF',
            data: [[0, 205], 255, 305, 350, 255]
          }
        ] 
      },  
      options: {
        legend: { display: false},
        scales: {
         xAxes: [
           {
             gridLines: {zeroLineColor: '#ccc'},
             ticks: { fontColor: "#CCC", },
           }
         ],
         yAxes: [
           {
             gridLines: {zeroLineColor: '#ccc'},
             ticks: { fontColor: "#CCC", },
           }
         ],
        }}
    });  
  }

// update charts with animations
}
