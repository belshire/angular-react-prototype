import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = false;

  toggleLoading() {
    console.log('toggling loading');
    this.isLoading = !this.isLoading;
  }
}
