import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LocalStorageService {

    // créer une méthode serialize

    getObject(key: string): any {
        if (!this.getItem(key)) {
            return false;
        }
        return JSON.parse(this.getItem(key));
    }

    setObject(key: string, object): void {
        const value = JSON.stringify(object);
        this.setItem(key, value);
    }

    getItem(key: string): any {
        // en cas de chaine vide === false
        if (localStorage.getItem(key) === '') {
            return false;
        }
        return localStorage.getItem(key);
    }

    setItem(key: any, value): void {
        localStorage.setItem(key, value);
        console.log('Here localstorage :', value, key);
    }

    clear(): void {
        localStorage.clear();
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

}
