import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'app/core/localStorage.service';
import { Race } from '../feature/race/race';
import { Personnage } from '../feature/personnage/personnage';

@Injectable()

export class RaceService {
    constructor(
        private localStorageService: LocalStorageService
    ) { }
     /* je dois persister la race dans l'objet personnage du localstorage */
    set(raceDTO: Race) {
        const personnage: Personnage = this.localStorageService.getObject('personnage');
        personnage.race = raceDTO;
        this.localStorageService.setObject('personnage', personnage);
    }

    get() {
        return this.localStorageService.getObject('race');
    }

}
