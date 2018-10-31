import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'case-info-component',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {
  @Input() valeur: string;
  @Input() placeholder: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeValue() {
    this.onChange.emit(this.valeur);
  }
}
