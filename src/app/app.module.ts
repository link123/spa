import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { appRouting } from './app.routes';


//Services
import { HeroesService } from './services/heroes.service';


//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import { HeroeComponent } from './components/shared/heroe/heroe.component';
import { HeroesEncontradosComponent } from './components/shared/heroes-encontrados/heroes-encontrados.component';
import { HoroeCardComponent } from './components/shared/horoe-card/horoe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesEncontradosComponent,
    HoroeCardComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
