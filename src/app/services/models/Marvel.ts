export interface Category {
    total:string;  
    cardDetails:CardDetails[]; 
    }
// export interface Comics {
//     total:string;  
//     cardDetails:CardDetails[]; 
//     }
// export interface Characters {
//     total:string;  
//     cardDetails:CardDetails[]; 
//     }
export interface CardDetails {
    id? :string;  
    name :string;  
    thumbnail:string;  
    description:string; 
    title?:string; 
    charactersAvailable?:string; 
    comicsAvailable?:string; 
    eventsAvailable?:string; 
    seriesAvailable?:string; 
    storiesAvailable?:string; 
    }