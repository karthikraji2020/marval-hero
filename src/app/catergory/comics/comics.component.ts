import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { CardDetails } from 'src/app/services/models/Marvel';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comicsPanelOpenState = false;
  comicsCardDetails:CardDetails []=[];
  comicsTotal:string='';
  
  constructor(private _marvelService:MarvelService,private router:Router) {
  this.getAllComics();
  }

  ngOnInit(): void {
  }
  getAllComics() {
    this._marvelService.getAllComics().subscribe((data:any)=>{
      // if(data?.results){
        let comics =data.data.results;
        this.comicsTotal=data.data.total;
        comics.forEach(item => {
         this.comicsCardDetails.push({
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
    this.router.navigate([`/comics/${cardObj.name}/${cardObj.id}`])
  }

}
