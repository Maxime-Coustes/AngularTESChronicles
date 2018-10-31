import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) { }


  OnInit() {
  }
  getClasses() {
     console.log('vers template choix de classe');
     this.router.navigate(['classe']); }
}
