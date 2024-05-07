import { Component, ViewEncapsulation } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { SliderInterface } from '../shared/slider/silder.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
userLocation: any = 'search';
searchText: any;


slides: SliderInterface[] = [
  {url: '../../../assets/slider1.png', title: 'demo1', description: 'hello this is a ad asda sd ad as da sd a da a  sd  brief description1', buttonEnable: true, pageUrl: ''},
  {url: '../../../assets/slider2.png', title: 'demo2', description: 'hello this  asd a sda sd  as d asis a brief description2', buttonEnable: true, pageUrl: ''},
  {url: '../../../assets/slider3.png', title: 'demo3', description: 'hello this  a sda sd as d a da dis a brief description3', buttonEnable: true, pageUrl: ''},
  {url: '../../../assets/slider1.png', title: 'demo4', description: 'hello this is as da sd a d as a brief description4', buttonEnable: true, pageUrl: ''},
  {url: '../../../assets/slider2.png', title: 'demo5', description: 'hello this is  a sda sd ad aa brief description5', buttonEnable: true, pageUrl: ''}];


changeLocation() {
  console.log(this.userLocation)
//throw new Error('Method not implemented.');
}
  items: any[] | undefined;

  selectedItem: any;

  suggestions!: any[];

  search(event: AutoCompleteCompleteEvent) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}
