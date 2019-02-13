import { Component, OnInit, Input } from '@angular/core';
import { ArmeCouranteCollection } from 'app/feature/arme/in-memory-data-arme-courante';
import { Arme } from './arme';

@Component({
  selector: 'app-arme',
  templateUrl: './arme.component.html',
  styleUrls: ['./arme.component.css']
})
export class ArmeComponent implements OnInit {

      @Input() arme: Arme;

  constructor() { }

  ngOnInit() {
    this.arme = new Arme();
  }

  generateArmeCourante(): void {
    const armeIndex: number = Math.floor((Math.random() * 25) + 1);
    console.log('generation d\'arme aléatoire');
    console.log('generation: ', ArmeCouranteCollection[armeIndex].nom);

    this.arme = ArmeCouranteCollection[armeIndex];
  }
}
