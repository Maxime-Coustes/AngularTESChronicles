import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CourbesJs } from './courbes-js';
import { courbesJsData } from './in-memory-data-courbes-js';

@Injectable()
export class CourbesJsService {
    private jsCollection = courbesJsData;

    getJsById(id: number): Observable<CourbesJs> {
        console.log('call to service JS method');
        for (let index = 0; index < this.jsCollection.length; index++) {
            // console.log(this.jsCollection[index]);
            if (this.jsCollection[index].id === id) {
                return Observable.create(observer => {
                    observer.next(this.jsCollection[index]);
                    console.log(this.jsCollection[index]);
                    observer.complete();
                });
            }
        }
        throw new Error('JS Id: ' + id + ' does not exist');
    }
}
