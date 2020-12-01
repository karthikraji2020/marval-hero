import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Data } from '../../services/models/Marvel';
import { Chart } from 'chart.js'; 
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  pieChart
  constructor() { }  
  ngOnInit(): void {
    this.renderChart();
}
 
  // load data 
  renderChart() {
    this.pieChart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: [
          'Comics',
          'Series',
          'Characters'
        ],
        datasets: [{
          data: [27612, 11146],
          backgroundColor: [
          '#3F8CA9',
          '#79B39C',
          'rgba(255, 206, 86, 0.6)'
          ],
          hoverBackgroundColor: [
          '#3F8CA9',
          '#79B39C',
          'rgba(255, 206, 86, 0.6)'
          ],
          borderColor: [
            '#57DCFF',
            '#A2ECC0',
            '#FFCE56'
          ]
        }],
      },
      options: {
          responsive: true,
          title: {
              display: false,
              text: "Total Confirmed Cases in country",
          },
          legend: {
              display: false,
              fontColor: "white",
               fontSize: 14,
          }
      }
    });  
  }


}
