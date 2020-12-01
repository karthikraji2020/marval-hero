import { Component, ElementRef, OnInit, ViewChild,Inject, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { CardDetails } from 'src/app/services/models/Marvel';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @ViewChild('cardRow',{static:false}) cardRow: ElementRef;
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  // charactersCardDetails:CardDetails []=[];
  charactersCardDetails:CardDetails []=[];
  charactersTotal:string='';
  charactersPanelOpenState = true;
  charactersSeeAllIsEnabled = false;
  placeholderFlag = true;
  
  constructor(private _marvelService:MarvelService,
    private router:Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private _document

    ) {
  
    this.getAllCharacters(); 
  }

    ngOnInit(): void {
      this._document.body.classList.add('bodybg-color');
      setTimeout(() => {
        this.placeholderFlag = !this.placeholderFlag;
      }, 2000);
  }
    ngOnDestroy() {
    
      this._document.body.classList.remove('bodybg-color');
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
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const url = this.route.snapshot.url[0].path;
    console.log(url);
    if(url==='characters'){
       this.charactersSeeAllIsEnabled=true;
      this.cardRow.nativeElement.classList.remove("card-row");
    }
  }
  
  goToDetailCard(cardObj) {
    console.log(cardObj);
      let name=cardObj.name.replace(/\s/g, '');
    this.router.navigate([`/characters/${name}/${cardObj.id}`])
  }
  togglePanel() {
    this.charactersPanelOpenState = !this.charactersPanelOpenState;
  }
}
  
