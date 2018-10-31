import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CourbesBBA } from './courbes-bba';
import { courbesBBAData } from './in-memory-data-courbes-bba';

@Injectable()
export class CourbesBBAService {
    private bbaCollection = courbesBBAData;

    getBBAById(id: number): Observable<CourbesBBA> {
        console.log('call to service method');
        for (let index = 0; index < this.bbaCollection.length; index++) {
            // console.log(this.bbaCollection[index]);
            if (this.bbaCollection[index].id === id) {
                return Observable.create(observer => {
                    observer.next(this.bbaCollection[index]);
                    console.log(this.bbaCollection[index]);
                    observer.complete();
                });
            }
        }
        throw new Error('Id: ' + id + ' does not exist');
    }
}
