import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Roger's Portfolio";
  showcase = '';

  setShowcase(value: string) {
    this.showcase = value;
  }
}
