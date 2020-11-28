import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './catergory/characters/characters.component';
import { ComicsComponent } from './catergory/comics/comics.component';
import { SeriesComponent } from './catergory/series/series.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'comics', component: ComicsComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'characters/:name/:id', component: DetailsComponent},
  { path: 'comics/:name/:id', component: DetailsComponent},
  { path: 'series/:name/:id', component: DetailsComponent},
  // Wildcard route for a 404 page
  { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
