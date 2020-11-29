import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { CardDetails } from 'src/app/services/models/Marvel';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  @ViewChild('cardRow',{static:false}) cardRow: ElementRef;

  seriesCardDetails:CardDetails []=[];
  seriesTotal:string='';

  seriesPanelOpenState = true;
  seriesSeeAllIsEnabled = true;

  constructor(
    private _marvelService:MarvelService,
    private router:Router,
    private route: ActivatedRoute,
    private seriesComponent: ElementRef,
    ) {

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

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const url = this.route.snapshot.url[0].path;
    console.log(url);
    // this.seriesComponent.nativeElement.classList.add("bodybg-color");
    // if(url==='characters'){
    if(url==='series'){
      this.seriesSeeAllIsEnabled= false;
      this.cardRow.nativeElement.classList.remove("card-row");
    }
  }
  
  togglePanel() {
    this.seriesPanelOpenState = !this.seriesPanelOpenState;
  }

}
