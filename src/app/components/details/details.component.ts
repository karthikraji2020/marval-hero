import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name:any;
  availableDetails:any=[];
  constructor(
    private route: ActivatedRoute,
    private _marvelService:MarvelService
    // private state: RouterStateSnapshot
  ) {
    this.getData();
  }

  ngOnInit(): void {
   
  }
getData() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log(this.route);
  const url = this.route.snapshot.url[0].path;
  console.log(url);

  this._marvelService.getCharactersById(id).subscribe((data:any)=>{
    if(data) {
      // let output = data.data.results.filter(x=>x.id==id)
      console.log(data);
      data.forEach(item => {
        this.availableDetails.push({
          id:item.id,
          name:item.name,
          description:item.description,
          comicsAvailable:item.comics.available,
          seriesAvailable:item.series.available,
          eventsAvailable:item.events.available,
          storiesAvailable:item.stories.available,
          thumbnail:item.thumbnail.path+'.'+item.thumbnail.extension,
         })
       });
      [this.availableDetails]=this.availableDetails;
      console.log(this.availableDetails);
    }
  })
}
}
