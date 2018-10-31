import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Identite } from './identite';
import { CaseInfoComponent } from '../../shared/case-info/case-info.component';
import { GenerationAleatoireService } from 'app/core/generationAleatoire.service';
import { ChoixClasseComponent } from 'app/feature/choix-classe/choix-classe.component';
import { Classe } from 'app/feature/choix-classe/classe';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { ChoixClasseService } from '../choix-classe/choix-classe.service';
import { Observable } from 'rxjs/Observable';
import { CaracteristiquesCollection } from 'app/feature/generation-carac/caracteristiques-collection';
import { LocalStorageService } from 'app/core/localStorage.service';
import { PersonnageService } from 'app/core/personnage.service';
import { Personnage } from 'app/feature/personnage/personnage';

@Component({
  selector: 'identite-component',
  templateUrl: './identite.component.html',
  styleUrls: ['./identite.component.css']
})
export class IdentiteComponent implements OnInit {
  personnageDTO: Personnage;

  constructor(
    private generateAleatoireService: GenerationAleatoireService,
    private classeService: ChoixClasseService,
    private route: ActivatedRoute,
    private router: Router,
    // private localStorageService: LocalStorageService,
    private personnageService: PersonnageService,

  ) { }

  ngOnInit() {
    this.personnageDTO = this.personnageService.get();
    console.log(this.personnageDTO);
  }

  checkDto() {
    this.personnageService.set(this.personnageDTO);
    console.log(this.personnageService.get());
    this.router.navigate(['classe/generationCarac/identite/resume']);
  }

}
