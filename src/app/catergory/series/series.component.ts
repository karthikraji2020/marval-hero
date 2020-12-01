import { Component, ElementRef, OnInit, ViewChild,AfterViewInit ,Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { CardDetails } from 'src/app/services/models/Marvel';
import { DOCUMENT } from '@angular/common';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  @ViewChild('cardRow',{static:false}) cardRow: ElementRef;

  seriesCardDetails:CardDetails []=[];
  seriesTotal:string='';

  seriesPanelOpenState = true;
  seriesSeeAllIsEnabled = false;
  placeholderFlag = true;

  constructor(
    private _marvelService:MarvelService,
    private _uiService:UiService,
    private router:Router,
    private route: ActivatedRoute,
    private seriesComponent: ElementRef,
    @Inject(DOCUMENT) private _document
    ) {

    this.getAllSeries()
  }


  getAllSeries() {
    this._marvelService.getAllSeries().subscribe((data:any)=>{
      if(data.data?.results){
        let series =data.data.results;
        this.seriesTotal=data.data.total;
        this.seriesCardDetails = this._uiService.constructAllHeros(series);
        this.placeholderFlag = false;
      }
    })
  }
  
  goToDetailCard(cardObj) {
    console.log(cardObj);
    let name=cardObj.name.replace(/\s/g, '');
    this.router.navigate([`/series/${name}/${cardObj.id}`])
  }

  ngAfterViewInit(): void {
    const url = this.route.snapshot.url[0].path;
    console.log(url);
    // this.seriesComponent.nativeElement.classList.add("bodybg-color");
    if(url==='series'){
      this.seriesSeeAllIsEnabled= true;
      this.cardRow.nativeElement.classList.remove("card-row");
    }
  }
  ngOnInit(): void {
    this._document.body.classList.add('bodybg-color');
   
}
  ngOnDestroy() {
  
    this._document.body.classList.remove('bodybg-color');
  }
  
  togglePanel() {
    this.seriesPanelOpenState = !this.seriesPanelOpenState;
  }
    


}
