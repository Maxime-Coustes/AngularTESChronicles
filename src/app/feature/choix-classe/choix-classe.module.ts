import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChoixClasseComponent } from './choix-classe.component';
import { PopoverModule } from 'ngx-bootstrap';
import { ChoixClasseService } from './choix-classe.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NgbModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [ChoixClasseComponent,  ],
  exports: [
    ChoixClasseComponent,
  ],
  providers: [
    ChoixClasseService
  ]
})
export class ChoixClasseModule { }
