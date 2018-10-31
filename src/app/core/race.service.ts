import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'app/core/localStorage.service';
import { Race } from '../feature/race/race';

@Injectable()

export class RaceService {
    constructor(
        private localStorageService: LocalStorageService
    ) { }

    set(raceDTO: Race) {
        this.localStorageService.setObject('race', raceDTO);
    }

    get() {
        return this.localStorageService.getObject('race');
    }

}
