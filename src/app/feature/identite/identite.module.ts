import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Identite } from '/home/maxime/workspaceMax/angular-feuille-de-personnage/src/app/feature/identite/identite';
import { Router, RouterModule, ParamMap, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '/home/maxime/workspaceMax/angular-feuille-de-personnage/src/app/core/core.module';
import { IdentiteService } from './identite.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule
  ],
  declarations: [],
  providers: [IdentiteService ]
})
export class IdentiteModule { }
