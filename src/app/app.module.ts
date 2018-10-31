import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourbesModule } from 'app/feature/courbes/courbes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChoixClasseModule } from 'app/feature/choix-classe/choix-classe.module';
import { AppRoutingModule } from './app-routing.module';
import { GenerationCaracModule } from 'app/feature/generation-carac/generation-carac.module';
import { SharedModule } from './shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap';
import { PersonnageModule } from 'app/feature/personnage/personnage.module';
import { RaceModule } from 'app/feature/race/race.module';
import { IdentiteModule } from 'app/feature/identite/identite.module';

import { Personnage } from 'app/feature/personnage/personnage';

import { GenerationAleatoireService } from 'app/core/generationAleatoire.service';
import { PersonnageService } from 'app/core/personnage.service';

import { AppComponent } from './app.component';
import { HomeComponent } from 'app/feature/home/home.component';
import { IdentiteComponent } from 'app/feature/identite/identite.component';
import { PersonnageComponent } from './feature/personnage/personnage.component';
import { ArmeComponent } from './feature/arme/arme.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentiteComponent,
    PersonnageComponent,
    ArmeComponent,
  ],
  imports: [
    BrowserModule,
    CourbesModule,
    ChoixClasseModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    GenerationCaracModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    PersonnageModule,
    RaceModule,
    IdentiteModule
  ],
  providers: [
    GenerationAleatoireService, PersonnageService, Personnage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

