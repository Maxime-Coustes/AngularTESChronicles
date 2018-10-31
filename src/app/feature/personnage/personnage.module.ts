import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Classe } from 'app/feature/choix-classe/classe';
import { Identite } from 'app/feature/identite/identite';
import { Caracteristique } from 'app/feature/generation-carac/caracteristiques';
import { Router, RouterModule, ParamMap, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonnageService } from 'app/core/personnage.service';
import { CoreModule } from 'app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule
  ],
  declarations: [],
  providers: [PersonnageService ]
})
export class PersonnageModule { }
