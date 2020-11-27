import { Component, OnInit,ViewChild } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  characters:any;
  names:any=[];
  thumbnails:any=[];
  cardDetails:any=[];
  panelOpenState = false;
  constructor(private _marvelService:MarvelService) { }
  ngOnInit(): void {
    // this._marvelService.getAllcharacters().subscribe((data)=>{
    //   this.characters=data;
    // })
    this._marvelService.getAllcharactersFromJson().subscribe((data:any)=>{
      // if(data?.results){
        this.characters=data.data.results;
       this.characters.forEach(item => {
         this.cardDetails.push({
           name:item.name,
           description:item.description,
           thumbnail:item.thumbnail.path+'.'+item.thumbnail.extension,
          })
        // this.names.push(item.name);
        // this.thumbnails.push(item.thumbnail.path+'.'+item.thumbnail.extension);
        });
        console.log(this.thumbnails);
        console.log(this.characters);

      // }
    })
  }

}
