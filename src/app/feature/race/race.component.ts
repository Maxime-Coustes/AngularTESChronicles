import { Component, OnInit } from '@angular/core';
import { RaceCollection } from './in-memory-data-race';
import { Observable } from 'rxjs/Observable';
import { Race } from './race';
import { ChoixRaceService } from './choix-race.service';
import { RaceService } from 'app/core/race.service';
import { Personnage } from '../personnage/personnage';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { LocalStorageService } from '../../core/localStorage.service';


@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  race: Race;
  raceCollection: Race[];
  personnageDTO: Personnage;

  constructor(
    private choixRaceService: ChoixRaceService, // getRaces   getRace
    private raceService: RaceService,
    private router: Router,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
  ) { }

  /* ngOnInit() {
    this.raceService.getRaces().subscribe(observable => this.raceCollection = observable);
  } */


  ngOnInit() {
    // j'appelle la methode du service, qui est un observable donc on s'y abonne
    // et avec le resultat (observable) je le mets dans classe collection
    this.choixRaceService.getRaces().subscribe(observable => this.raceCollection = observable);
    this.personnageDTO = new Personnage();
    this.personnageDTO.race = new Race();
  }

  onChoice(id) {
    this.choixRaceService.getRace(id).subscribe(observable => {
      this.personnageDTO.race = observable;
      this.raceService.set(this.personnageDTO.race);
      // redirection vers la preahine étape
      // 'classe/generationCarac/:id/:slugName'
      this.router.navigate(['classe/generationCarac/identite/race/resume']);
    }
    );

  }

}
