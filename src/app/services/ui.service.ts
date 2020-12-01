import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

constructAllHeros(data) {
  let availableHeroDetails=[];
  if(data) {
    data.forEach(item => {
      availableHeroDetails.push({
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
    return availableHeroDetails;
  }
}
constructHeroDetails(data) {
  let heroDetail=[];
  heroDetail =this.constructAllHeros(data);
  [heroDetail]=heroDetail;
  return heroDetail;
}
}
