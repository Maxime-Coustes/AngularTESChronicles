import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerationAleatoireService } from './generationAleatoire.service';
import { LocalStorageService } from 'app/core/localStorage.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ ],
  providers: [
    GenerationAleatoireService,
    LocalStorageService
  ],
})
export class CoreModule { }
