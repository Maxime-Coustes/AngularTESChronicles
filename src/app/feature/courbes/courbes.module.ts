import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourbesComponent } from 'app/feature/courbes/courbes.component';
import { CourbesBBAService } from 'app/feature/courbes/courbes-bba.service';
import { CourbesJsService } from 'app/feature/courbes/courbes-js.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourbesComponent
  ],
  providers: [
    CourbesBBAService,
    CourbesJsService
  ],
  exports: [
    CourbesComponent,
  ]
})
export class CourbesModule { }
