import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  animations: [
    trigger('slideOutRight', [
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition('visible => hidden', animate('1s ease-out'))
    ])
  ]
})
export class SplashComponent {
  title = 'xclusive mart'
  loading = true;
}


