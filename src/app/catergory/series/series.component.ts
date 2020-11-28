import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { CardDetails } from 'src/app/services/models/Marvel';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesCardDetails:CardDetails []=[];
  seriesTotal:string='';

  charactersPanelOpenState = false;
  comicsPanelOpenState = false;
  seriesPanelOpenState = false;

  constructor(private _marvelService:MarvelService,private router:Router) {

    this.getAllSeries()
  }

  ngOnInit(): void {
  }
  getAllSeries() {
    this._marvelService.getAllSeries().subscribe((data:any)=>{
      // if(data?.results){
        let series =data.data.results;
        this.seriesTotal=data.data.total;
        series.forEach(item => {
         this.seriesCardDetails.push({
           name:item.title,
           description:item.description,
           comicsAvailable:item.comics?.available,
           seriesAvailable:item.series?.available,
           eventsAvailable:item.events?.available,
           storiesAvailable:item.stories?.available,
           thumbnail:item.thumbnail.path+'.'+item.thumbnail.extension,
          })
        });
      // }
    })
  }
  
  goToDetailCard(cardObj) {
    console.log(cardObj);
    this.router.navigate([`/series/${cardObj.name}/${cardObj.id}`])
  }

}
