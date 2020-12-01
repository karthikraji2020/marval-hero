import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class DetailsComponent implements OnInit {
  name:any;
  availableDetails:any=[];
  constructor(
    private route: ActivatedRoute,
    private _marvelService:MarvelService,
    @Inject(DOCUMENT) private _document
    // private state: RouterStateSnapshot
  ) {
    this.getData();
  }
  
  ngOnInit(): void {
    this._document.body.classList.add('detailbg-color');
    // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
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
        this.reconstructData(data);
      })
      break;
    case 'comics':
      this._marvelService.getComicsById(id).subscribe((data:any)=>{
        this.reconstructData(data);
      })
      break;
    case 'series':
      this._marvelService.getSeriesById(id).subscribe((data:any)=>{
        this.reconstructData(data);
      })
      break;
  
    default:
      break;
  }

 

}

reconstructData(data) {
  if(data) {
    // let output = data.data.results.filter(x=>x.id==id)
    console.log(data);
    data.forEach(item => {
      this.availableDetails.push({
        id:item.id,
        name :item.name ? item.name : item.title,
        description:item.description,
        comicsAvailable:item.comics?.available,
        seriesAvailable:item.series?.available,
        eventsAvailable:item.events?.available,
        storiesAvailable:item.stories?.available,
        thumbnail:item.thumbnail.path+'.'+item.thumbnail.extension,
       })
     });
    [this.availableDetails]=this.availableDetails;
    console.log(this.availableDetails);
  }
}
}
