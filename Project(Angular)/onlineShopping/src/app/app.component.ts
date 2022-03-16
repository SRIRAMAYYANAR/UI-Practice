import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineShopping';

  url =window.document.URL;
  constructor(private location: Location){}
  goBack(){
    this.location.back();
  }
  goNext(){
    this.location.forward();
  }
}
