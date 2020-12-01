import { Component, ElementRef, OnInit, ViewChild,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { CardDetails } from 'src/app/services/models/Marvel';
import { DOCUMENT } from '@angular/common';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  @ViewChild('cardRow',{static:false}) cardRow: ElementRef;

  comicsPanelOpenState = true;
  comicsCardDetails:CardDetails []=[];
  comicsTotal:string='';
  comicsSeeAllIsEnabled = false;
  placeholderFlag = true;
  
  constructor(
    private _marvelService:MarvelService,
    private _uiService:UiService,
    private router:Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private _document
    ) {
  this.getAllComics();
  }

  ngOnInit(): void {
    this._document.body.classList.add('bodybg-color');
}
  ngOnDestroy() {
  
    this._document.body.classList.remove('bodybg-color');
  }
  getAllComics() {
    this._marvelService.getAllComics().subscribe((data:any)=>{
       if(data.data?.results){
        let comics =data.data.results;
        this.comicsTotal=data.data.total;
        this.comicsCardDetails = this._uiService.constructAllHeros(comics);
        this.placeholderFlag = false;
      }
    })
  }

  goToDetailCard(cardObj) {
    console.log(cardObj);
    let name=cardObj.name.replace(/\s/g, '');
    this.router.navigate([`/comics/${name}/${cardObj.id}`])
  }
  ngAfterViewInit(): void {
    const url = this.route.snapshot.url[0].path;
    console.log(url);
    if(url==='comics'){
      this.comicsSeeAllIsEnabled=true;
      this.cardRow.nativeElement.classList.remove("card-row");
    }
  }
  
  togglePanel() {
    this.comicsPanelOpenState = !this.comicsPanelOpenState;
  }

}
