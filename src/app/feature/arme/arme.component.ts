import { Component, OnInit, Input } from '@angular/core';
import { ArmeCouranteCollection } from 'app/feature/arme/in-memory-data-arme-courante';
import { ArmeGuerreCollection } from 'app/feature/arme/in-memory-data-arme-de-guerre';
import { Arme } from './arme';
import { ProprieteMagiqueArme } from './in-memory-data-arme-propiete-magique';
import { ProprieteMagique } from './propriete-magique';

@Component({
  selector: 'app-arme',
  templateUrl: './arme.component.html',
  styleUrls: ['./arme.component.css']
})
export class ArmeComponent implements OnInit {

  @Input() arme: Arme;
  @Input() armeGuerre: Arme;
  @Input() proprieteMagiqueGeneree: ProprieteMagique;

  constructor() { }

  ngOnInit() {
    this.arme = new Arme();
    this.armeGuerre = new Arme();
    this.proprieteMagiqueGeneree = new ProprieteMagique();
  }

  generateArmeCouranteMagique(): void {
    this.generateArmeCourante();
    this.generateProprieteMagique();
  }

  generateArmeCourante(): void {
    const armeIndex: number = Math.floor((Math.random() * 25) + 1);
    console.log('generation d\'arme aléatoire');
    console.log('generation: ', ArmeCouranteCollection[armeIndex].nom);

    this.arme = ArmeCouranteCollection[armeIndex];
  }

  generateProprieteMagique(): void {
    const proprieteMagique: number = Math.floor((Math.random() * 38) + 1);
    console.log('génération de propriété magique');
    console.log('generation: ', ProprieteMagiqueArme[proprieteMagique].nom);

    if (ProprieteMagiqueArme[proprieteMagique].bonus === '+1') {
      console.log('bonus arme +1');
    }
    if (ProprieteMagiqueArme[proprieteMagique].bonus === '+2') {
      console.log('bonus arme +2');
    }
    if (ProprieteMagiqueArme[proprieteMagique].bonus === '+3') {
      console.log('bonus arme +3');
    }
    if (ProprieteMagiqueArme[proprieteMagique].bonus === '+4') {
      console.log('bonus arme +4');
    }
    if (ProprieteMagiqueArme[proprieteMagique].bonus === '+5') {
      console.log('bonus arme +5');
    }
    this.proprieteMagiqueGeneree = ProprieteMagiqueArme[proprieteMagique];

  }

    /*generateArmeGuerreMagique(): void {
    this.generateArmeDeGuerre();
    this.generateProprieteMagique();
  }*/

  /*generateArmeDeGuerre(): void {
    const armeGuerreIndex: number = Math.floor((Math.random() * 45) + 1);
    console.log('generation d\'arme de guerre');
    console.log('generation: ', ArmeGuerreCollection[armeGuerreIndex].nom);

    this.armeGuerre = ArmeGuerreCollection[armeGuerreIndex];
  }*/

}
