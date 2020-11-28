import { Component, OnInit,ViewChild } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import {MatAccordion} from '@angular/material/expansion';
import { CardDetails,Category } from './../../services/models/Marvel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  charactersCardDetails:CardDetails []=[];
  charactersTotal:string='';

  comicsCardDetails:CardDetails []=[];
  comicsTotal:string='';

  seriesCardDetails:CardDetails []=[];
  seriesTotal:string='';
  panelOpenState = false;

  charactersPanelOpenState = false;
  comicsPanelOpenState = false;
  seriesPanelOpenState = false;
  // charactersPanelOpenState = true;
  // comicsPanelOpenState = true;
  // seriesPanelOpenState = true;
  constructor(private _marvelService:MarvelService) {

    // this.getAllCharacters();
    // this.getAllComics();
    // this.getAllSeries();
   }
  ngOnInit(): void {
  }

  getAllCharacters() {
    this._marvelService.getAllCharacters().subscribe((data:any)=>{
      // if(data?.results){
      let characters =data.data.results;
        this.charactersTotal=data.data.total;
       characters.forEach(item => {
         this.charactersCardDetails.push({
           name:item.name,
           description:item.description,
           thumbnail:item.thumbnail.path+'.'+item.thumbnail.extension,
          })
        });
      // }
    })
  }
  getAllComics() {
    this._marvelService.getAllComics().subscribe((data:any)=>{
      // if(data?.results){
        let comics =data.data.results;
        this.comicsTotal=data.data.total;
        comics.forEach(item => {
         this.comicsCardDetails.push({
           name:item.name,
           description:item.description,
           thumbnail:item.thumbnail.path+'.'+item.thumbnail.extension,
          })
        });

      // }
    })
  }
  getAllSeries() {
    this._marvelService.getAllSeries().subscribe((data:any)=>{
      // if(data?.results){
        let series =data.data.results;
        this.seriesTotal=data.data.total;
        series.forEach(item => {
         this.seriesCardDetails.push({
           name:item.name,
           description:item.description,
           thumbnail:item.thumbnail.path+'.'+item.thumbnail.extension,
          })
        });
      // }
    })
  }
}
