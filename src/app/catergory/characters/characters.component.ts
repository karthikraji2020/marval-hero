import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { CardDetails } from 'src/app/services/models/Marvel';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @ViewChild('cardRow',{static:true}) cardRow: ElementRef;
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  charactersCardDetails:CardDetails []=[];
  charactersTotal:string='';
  charactersPanelOpenState = false;
  charactersSeeAllIsEnabled = false;
  constructor(private _marvelService:MarvelService,
    private router:Router,
    private route: ActivatedRoute,
    ) {

    this.getAllCharacters(); }

  ngOnInit(): void {
   
  }
  getAllCharacters() {
    this._marvelService.getAllCharacters().subscribe((data:any)=>{
      // if(data?.results){
        console.log(data)
      let characters =data.data.results;
        this.charactersTotal=data.data.total;
       characters.forEach(item => {
         this.charactersCardDetails.push({
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
      // }
    })
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const url = this.route.snapshot.url[0].path;
    console.log(url);
    if(url==='characters'){
      // this.charactersSeeAllIsEnabled=true;
      this.cardRow.nativeElement.classList.remove("card-row");
    }
  }
  
  goToDetailCard(cardObj) {
    console.log(cardObj);
    this.router.navigate([`/characters/${cardObj.name}/${cardObj.id}`])
  }
}
