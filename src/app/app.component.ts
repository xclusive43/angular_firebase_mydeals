import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xclusive_mart';
  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1500); // Simulate loading delay for 3 seconds
  }
}
