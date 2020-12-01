import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DetailsComponent implements OnInit {
  name:any;
  availableDetails:any=[];
  constructor(
    private route: ActivatedRoute,
    private _marvelService:MarvelService,
    private _uiService:UiService,
    @Inject(DOCUMENT) private _document
    // private state: RouterStateSnapshot
  ) {
    this.getData();
  }
  
  ngOnInit(): void {
    this._document.body.classList.add('detailbg-color');
}

  ngOnDestroy() {
    this._document.body.classList.remove('detailbg-color');
  }
 
getData() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log(this.route);
  const url = this.route.snapshot.url[0].path;
  console.log(url);
  switch (url) {
    case 'characters':
      this._marvelService.getCharactersById(id).subscribe((data:any)=>{
        if(data){
          this.constructHeroDetails(data);
        }
      })
      break;
    case 'comics':
      this._marvelService.getComicsById(id).subscribe((data:any)=>{
        if(data){
            this.constructHeroDetails(data);
        }
      })
      break;
    case 'series':
      this._marvelService.getSeriesById(id).subscribe((data:any)=>{
        if(data){
          this.constructHeroDetails(data);
        }
      })
      break;
  
    default:
      break;
  }

 

}

constructHeroDetails(data) {
    this.availableDetails = this._uiService.constructHeroDetails(data);
}
}
