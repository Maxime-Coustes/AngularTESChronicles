import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Identite } from './identite';
import { LocalStorageService } from 'app/core/localStorage.service';

@Injectable()

export class IdentiteService {

    constructor(
        private localStorageService: LocalStorageService
    ) { }

    set(identiteDTO: Identite) {
        this.localStorageService.setObject('identite', identiteDTO);
    }

    get() {
        return this.localStorageService.getObject('identite');
    }

    getNom(identiteDTO: Identite) {
        return this.localStorageService.getObject('nom');
    }
    getPrenom(identiteDTO: Identite) {
        return this.localStorageService.getObject('prenom');
    }

}
