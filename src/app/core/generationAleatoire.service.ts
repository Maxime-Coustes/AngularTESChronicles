import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { variable } from '@angular/compiler/src/output/output_ast';
import { add } from 'ngx-bootstrap/chronos';
import { ChoixClasseModule } from 'app/feature/choix-classe/choix-classe.module';
import { ClasseCollection } from 'app/feature/choix-classe/in-memory-data-classes';
import { Classe } from '../feature/choix-classe/classe';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable()
export class GenerationAleatoireService {
    // propriété

    private classe = Classe;

    generateD20() {
        console.log('generation Aleatoire service');
        return Math.floor((Math.random() * 20) + 1);
    }

    generate1D6(): number {
        const tableau1D6: Array<number> = [
            Math.floor((Math.random() * 6) + 1)
        ];

        const total1D6: number = ((tableau1D6[0]));
        return total1D6;
    }

    generate2D6(): number {
        const tableau2D6: Array<number> = [
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1)
        ];

        const total2D6: number = ((tableau2D6[0]) + (tableau2D6[1]));
        return total2D6;
    }

    generate3D6(): number {
        const tableau3D6: Array<number> = [
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1)
        ];

        const total3D6: number = ((tableau3D6[0]) + (tableau3D6[1]) + (tableau3D6[2]));
        return total3D6;
    }

    generate4D6(): number {
        const tableau4D6: Array<number> = [
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1)
        ];

        const total4D6: number = ((tableau4D6[0]) + (tableau4D6[1]) + (tableau4D6[2]) + (tableau4D6[3]) );
        const total4D6moins1D6: number = ((tableau4D6[0]) + (tableau4D6[1]) + (tableau4D6[2]) + (tableau4D6[3])
        -   Math.min.apply(Math, tableau4D6));

            return total4D6moins1D6;
    }

    generate5D6(): number {
        const tableau5D6: Array<number> = [
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1),
            Math.floor((Math.random() * 6) + 1)
        ];

        const total5D6: number = ((tableau5D6[0]) + (tableau5D6[1]) + (tableau5D6[2]) + (tableau5D6[3]) + (tableau5D6[4]));

        return total5D6;
    }

    tirageOrDepart(): number {
        // case InMemoryDataClasse.Argent départ== 1D6; case 2d6...
        // const argentInitial: classe.
        return;
    }



}
