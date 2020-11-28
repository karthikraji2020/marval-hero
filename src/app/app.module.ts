import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarComponent } from './charts/bar/bar.component';
import { PieComponent } from './charts/pie/pie.component';
import { LineComponent } from './charts/line/line.component';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { CharactersComponent } from './catergory/characters/characters.component';
import { ComicsComponent } from './catergory/comics/comics.component';
import { SeriesComponent } from './catergory/series/series.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    LineComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    CharactersComponent,
    ComicsComponent,
    SeriesComponent,
    DetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatExpansionModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
