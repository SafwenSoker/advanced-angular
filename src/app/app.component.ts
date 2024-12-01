import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advanced-angular';
  number = 4
  isClicked = false;
  onClick(){
    this.isClicked = true;
  }
}
