import { Component, OnInit, Input } from '@angular/core';
import { Classe } from './classe';
import { ChoixClasseService } from './choix-classe.service';
import { Location } from '@angular/common';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ClasseCollection } from './in-memory-data-classes';
import { Observable } from 'rxjs/Observable';
import { PersonnageService } from 'app/core/personnage.service';
import { LocalStorageService } from '../../core/localStorage.service';
import { Personnage } from '../personnage/personnage';
import { Identite } from '../identite/identite';

@Component({
  selector: 'choix-classe-component',
  templateUrl: './choix-classe.component.html',
  styleUrls: ['./choix-classe.component.css']
})

export class ChoixClasseComponent implements OnInit {

  classeCollection: Classe[];
  personnageDTO: Personnage;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private classeService: ChoixClasseService,
    private personnageService: PersonnageService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    // j'appelle la methode du service, qui est un observable donc on s'y abonne
    // et avec le resultat (observable) je le mets dans classe collection
    this.classeService.getClasses().subscribe(observable => this.classeCollection = observable);
    this.personnageDTO = new Personnage();
    this.personnageDTO.identite = new Identite();
    this.personnageDTO.caracteristiques = [];
    this.personnageDTO.classe = new Classe();
  }

  onChoice(id) {
    this.classeService.getClasse(id).subscribe(observable => {
      this.personnageDTO.classe = observable;
      this.personnageService.set(this.personnageDTO);
      // redirection vers la preahine étape
      // 'classe/generationCarac/:id/:slugName'
      this.router.navigate(['classe/generationCarac']);
     }
    );

  }

}
