import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { GenerationCaracComponent } from 'app/feature/generation-carac/generation-carac.component';
import { ChoixClasseComponent } from 'app/feature/choix-classe/choix-classe.component';
import { HomeComponent } from 'app/feature/home/home.component';
import { IdentiteComponent } from 'app/feature/identite/identite.component';
import { PersonnageComponent } from './feature/personnage/personnage.component';
import { RaceComponent } from './feature/race/race.component';

const routes: Routes = [
    { path: 'classe/generationCarac', component: GenerationCaracComponent },
    { path: 'classe', component: ChoixClasseComponent },
    { path: 'classe/generationCarac/identite', component: IdentiteComponent },
    { path: 'classe/generationCarac/identite/resume', component: PersonnageComponent },
    { path: 'classe/generationCarac/identite/race/resume', component: PersonnageComponent },
    { path: 'classe/generationCarac/identite/race', component: RaceComponent },
    { path: '', component: HomeComponent },
    // { path: 'classe/generationCarac/identite/resume/departArgent', component: ArgentDepartComponent}
    // { path: 'qg', loadChildren: '../app/feature/qg/qg.module#QgModule' },
];

@NgModule({
    imports: [
        // permet de lazyLoader les modules dès que possible sans géner les perfs
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [
        RouterModule,
    ],
    providers: [  ]
})
export class AppRoutingModule { }
