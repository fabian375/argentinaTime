import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
currentYear:number;
  constructor() {
  
    let d = new Date();
    this.currentYear = d.getFullYear();

  }

}
