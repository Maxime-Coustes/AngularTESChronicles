import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Race } from './race';
import { RaceCollection } from './in-memory-data-race';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class ChoixRaceService {
    // propriété
    private raceCollection = RaceCollection;

    constructor() { }

    getRaces(): Observable<Race[]> {
        return Observable.create(observer => observer.next(RaceCollection));
    }
    getRace(id): Observable<Race> {
        // Récupération de la valeur
        let localRace: Race = null;
        this.raceCollection.forEach(race => {
            if (race.id === id) {
                localRace = race;
            }
        });
        // Retour de la valeur sous forme d'observable
        return Observable.create(observer => observer.next(
            localRace
        ));
    }

}
