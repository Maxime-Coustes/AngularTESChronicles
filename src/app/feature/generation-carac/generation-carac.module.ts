import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerationAleatoireService } from 'app/core/generationAleatoire.service';
import { GenerationCaracComponent } from './generation-carac.component';
import { ChoixClasseModule } from 'app/feature/choix-classe/choix-classe.module';
import { SortableModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { Router, RouterModule, ParamMap, ActivatedRoute } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    ChoixClasseModule,
    SortableModule.forRoot(),
    FormsModule,
    SharedModule,
    RouterModule
  ],
  declarations: [GenerationCaracComponent ],
  providers: [
  ],
})
export class GenerationCaracModule { }
