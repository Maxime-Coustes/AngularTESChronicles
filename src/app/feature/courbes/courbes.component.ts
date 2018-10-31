import { Component, OnInit } from '@angular/core';

import { CourbesJs } from './courbes-js';
import { courbesJsData } from 'app/feature/courbes/in-memory-data-courbes-js';
import { CourbesJsService } from './courbes-js.service';

import { CourbesBBA } from 'app/feature/courbes/courbes-bba';
import { courbesBBAData } from 'app/feature/courbes/in-memory-data-courbes-bba';
import { CourbesBBAService } from 'app/feature/courbes/courbes-bba.service';

@Component({
    selector: 'courbes-component',
    templateUrl: './courbes.component.html',
    styleUrls: ['./courbes.component.css']
})
export class CourbesComponent implements OnInit {

    bbaCourbes: CourbesBBA = null;
    jsCourbes: CourbesJs = null;
    constructor(
        private bbaService: CourbesBBAService,
        private jsService: CourbesJsService
    ) { }

    ngOnInit() {
        this.getBBAById(Math.floor(Math.random() * 60) + 1);
        this.getJsById(Math.floor(Math.random() * 40) + 1);
    }

    getBBAById(id: number): void {
        console.log('call to BBA method');
        this.bbaService.getBBAById(id)
            .subscribe(toto => this.bbaCourbes = toto);
    }
    getJsById(id: number): void {
        console.log('call to JS method');
        this.jsService.getJsById(id)
            .subscribe(tata => this.jsCourbes = tata);
    }
}
