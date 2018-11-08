import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Personnage } from 'app/feature/personnage/personnage';
import { LocalStorageService } from 'app/core/localStorage.service';

@Injectable()

export class PersonnageService {
    constructor(
        private localStorageService: LocalStorageService
    ) { }

    set(personnageDTO: Personnage) {
        this.localStorageService.setObject('personnage', personnageDTO);
    }

    get() {
        console.log(' getPersonnage from get() in personnageService', this.localStorageService.getObject('personnage'));
        return this.localStorageService.getObject('personnage');
    }

}
