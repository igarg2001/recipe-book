import { Component } from '@angular/core';
import { isRegExp } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url:string = "recipes"
  onToggleNavigation = (url:string) => {
    this.url = url
  }
}
