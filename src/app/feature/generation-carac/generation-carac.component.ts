import { Component, OnInit } from '@angular/core';
import { GenerationAleatoireService } from 'app/core/generationAleatoire.service';
import { ChoixClasseComponent } from 'app/feature/choix-classe/choix-classe.component';
import { Classe } from 'app/feature/choix-classe/classe';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { ChoixClasseService } from '../choix-classe/choix-classe.service';
import { Observable } from 'rxjs/Observable';
import { CaracteristiquesCollection } from 'app/feature/generation-carac/caracteristiques-collection';
import { Caracteristique } from './caracteristiques';
import { LocalStorageService } from 'app/core/localStorage.service';
import { PersonnageService } from 'app/core/personnage.service';
import { Personnage } from '../personnage/personnage';


@Component({
  selector: 'generation-carac-component',
  templateUrl: './generation-carac.component.html',
  styleUrls: ['./generation-carac.component.css']
})
export class GenerationCaracComponent implements OnInit {
  classe: Classe;
  caracs: CaracteristiquesCollection = new CaracteristiquesCollection();
  sortableCarac: number[];
  resultatGenere: number;
  personnageDTO: Personnage;

  itemCaracGenere: number[];
  itemCaracRepartition: number[] = [];

  constructor(
    private generateAleatoireService: GenerationAleatoireService,
    private classeService: ChoixClasseService,
    private route: ActivatedRoute,
    private router: Router,
    // private localStorageService: LocalStorageService,
    private persistenceService: PersonnageService,
    ) {}

  ngOnInit() {
    this.personnageDTO = this.persistenceService.get();
    this.caracs.caracteristiques = [
      { 'nom': 'FOR', 'valeur': null },
      { 'nom': 'DEX', 'valeur': null },
      { 'nom': 'CON', 'valeur': null },
      { 'nom': 'INT', 'valeur': null },
      { 'nom': 'SAG', 'valeur': null },
      { 'nom': 'CHA', 'valeur': null }
    ];
    }

  generateD20(): void {
    this.resultatGenere = this.generateAleatoireService.generateD20();
  }

  generate4D6(): void {
    this.sortableCarac = [];

    // ici carac = toto et j'enferme dans carac la valeur générée par 4D6
    this.caracs.caracteristiques.forEach(
      carac => {
        carac.valeur = this.generateAleatoireService.generate4D6();
        this.sortableCarac.push(carac.valeur);
      });
    console.log(this.caracs);
  }

  onChange() {
    this.sortableCarac.forEach(
      (carac, index) => {
        this.caracs.caracteristiques[index].valeur = carac;
      });
      this.personnageDTO.caracteristiques = this.caracs.caracteristiques;
      this.persistenceService.set(this.personnageDTO);
      console.log(this.persistenceService.get());
  }
}
