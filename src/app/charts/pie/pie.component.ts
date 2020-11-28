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
  barchart :any;  
  // barchart = [];  
  constructor(private http: HttpClient) { }  
  ngOnInit(): void {
    this.renderChart();
}
  // renderChart2 () {
    
  //   let ctx1 = document.getElementById('pieChart').getContext('2d');
  //   // pie chart options
  //   var pieOptions = {
  //           segmentShowStroke: false,
  //           animateScale: true
  //       }
  //       // new Chart(pieChart).Pie(pieData, ctx1);
  //   let chart = new Chart(ctx1, {
  //       type: 'pie',
  //       data: {
  //           labels: [],
  //           datasets: [{
  //               data: [],
  //               label: 'Coronavirus Activity in Poland',
  //               backgroundColor: ['rgba(255, 99, 132, 1)',
  //                   'rgba(194, 132, 135, 1)',
  //                   'rgba(75, 192, 192, 1)',
  //               ],
  //               borderColor: 'transparent',
  //           }]
  //       },
  //       options: {
  //           responsive: true,
  //           title: {
  //               display: true,
  //               text: "Total Confirmed Cases in country",
  //           },
  //           legend: {
  //               display: true,
  //               fontColor: "white",
  //                fontSize: 14,
  //           }
            
  //       }
  //   });
  //   // 
  //  var mylineChartCtx = document.getElementById('mylineChart').getContext('2d');
  //   var mylineChart = new Chart(mylineChartCtx, {
  //       // The type of chart we want to create
  //       type: 'line', // also try bar or other graph types
  //       // The data for our dataset
  //       data: {
  //           labels:[],
  //           // Information about the dataset
  //           datasets: [
  //           {
  //               label: "Deaths",
  //                  backgroundColor:  'rgba(255, 2, 12, .7)',
  //               borderColor:  'rgba(175, 2, 2, 1)',
  //              data:[]
  //           },
  //           {
  //               label: 'Recovered',
  //               backgroundColor:  'rgba(75, 192, 12, .7)',
  //               borderColor:  'rgba(75, 142, 12, 1)',
  //               data: [],
  //            }
  //           ,
  //           {
  //               label: 'Confirmed',
  //               backgroundColor:  'rgba(255, 112, 12, .7)',
  //               borderColor:  'rgba(255, 112, 12, 1)',
  //               data: [],
  //            }
  //       ],

  //           options: {
  //           maintainAspectRatio: false,
  //           responsive: true,
  //           title: {
  //               display: true,
  //           },
  //           legend: {
  //               display: true
  //           },
  //           scales: {
  //               yAxes: [{
  //                   ticks: {
  //                     fontColor: "white",
  //                     fontSize: 14,
  //                   }
  //               }],
  //               xAxes: [{
  //                   ticks: {
  //                       fontColor: "white",
  //                       fontSize: 14,
  //                   }
  //       }]
  //           }
  //       }
  //       },

  //       // Configuration options
  //       options: {
  //           layout: {
  //               padding: 10,
  //           },
  //           legend: {
  //               position: 'bottom',
  //           },
  //           title: {
  //               display: true,
  //               text: 'India'
  //           },
  //           scales: {
  //               yAxes: [
  //              {
  //               ticks: {
  //                     fontColor: "white",
  //                     fontSize: 14,
  //                       beginAtZero: true,
                        
  //                   },  scaleLabel: {
  //                       display: true,
  //                       labelString: 'No of People'
  //                   }
  //               }],
  //               xAxes: [{
  //               ticks:{
  //                     fontColor: "white",
  //                     fontSize: 14,
  //                       beginAtZero: true,
  //                   },
  //                   scaleLabel: {
  //                       // display: true,
  //                       // labelString: 'Month of the Year'
  //                   }
  //               }]
  //           }
  //       }
  //   });

  //   new Chart(ctx1).Pie(pieOptions);

  // }

  // load data 
  renderChart() {
    this.pieChart = new Chart('pieChart', {
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
              display: true,
              text: "Total Confirmed Cases in country",
          },
          legend: {
              display: true,
              fontColor: "white",
               fontSize: 14,
          }
      }
    });  
  }


}
