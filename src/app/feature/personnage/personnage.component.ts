import { Component, OnInit } from '@angular/core';
import { Personnage } from './personnage';
import { PersonnageService } from 'app/core/personnage.service';


@Component({
  selector: 'personnage-component',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent implements OnInit {
  personnageDTO: Personnage;
  constructor(
    private personnageService: PersonnageService
  ) { }

  ngOnInit() {
    this.personnageDTO = this.personnageService.get();
    console.log(this.personnageDTO);
  }



}
