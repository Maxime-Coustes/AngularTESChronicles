import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Identite } from 'app/feature/identite/identite';


@Component({
    selector: 'dropdown-component',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() valeur: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange = new EventEmitter<string>();

    onHidden(): void {
        console.log('Dropdown is hidden');
    }
    onShown(): void {
        console.log('Dropdown is shown');
    }
    isOpenChange(): void {
        console.log('Dropdown state is changed');
    }

    changeValue() {
        this.onChange.emit(this.valeur);
    }
    constructor() { }

    ngOnInit() {
    }

}
