import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Classe } from './classe';
import { ClasseCollection } from './in-memory-data-classes';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class ChoixClasseService {
    // propriété
    private classeCollection = ClasseCollection;

    constructor() { }

    getClasses(): Observable<Classe[]> {
        return Observable.create(observer => observer.next(ClasseCollection));
    }
    getClasse(id): Observable<Classe> {
        // Récupération de la valeur
        let localClass: Classe = null;
        this.classeCollection.forEach(classe => {
            if (classe.id === id) {
                localClass = classe;
            }
        });
        // Retour de la valeur sous forme d'observable
        return Observable.create(observer => observer.next(
            localClass
        ));
    }

    getClasseBySlug(slugName): Observable<Classe> {
        // Récupération de la valeur
        let localClass: Classe = null;
        this.classeCollection.forEach(classe => {
            if (classe.slugName === slugName) {
                localClass = classe;
            }
        });
        // Retour de la valeur sous forme d'observable
        return Observable.create(observer => observer.next(
            localClass
        ));
    }
}
