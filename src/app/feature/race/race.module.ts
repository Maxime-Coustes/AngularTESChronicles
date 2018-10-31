import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceComponent } from './race.component';
import { RaceCollection } from './in-memory-data-race';
import { ChoixRaceService } from './choix-race.service';
import { RaceService } from 'app/core/race.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RaceComponent,
  ],
  providers: [
    ChoixRaceService,
    RaceService
  ]
})
export class RaceModule { }
