import { Component, Input } from '@angular/core';
import { SliderInterface } from './silder.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {




constructor(){}
@Input() slides: SliderInterface[] = [];

currentIndex: number = 0;
timeoutId?: number;

ngOnInit(): void {
  this.resetTimer();
}
ngOnDestroy() {
  window.clearTimeout(this.timeoutId);
}
resetTimer() {
  if (this.timeoutId) {
    window.clearTimeout(this.timeoutId);
  }
  this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
}

goToPrevious(): void {
  const isFirstSlide = this.currentIndex === 0;
  const newIndex = isFirstSlide
    ? this.slides.length - 1
    : this.currentIndex - 1;

  this.resetTimer();
  this.currentIndex = newIndex;
}

goToNext(): void {
  const isLastSlide = this.currentIndex === this.slides.length - 1;
  const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

  this.resetTimer();
  this.currentIndex = newIndex;
}

goToSlide(slideIndex: number): void {
  this.resetTimer();
  this.currentIndex = slideIndex;
}

getCurrentSlideUrl() {
  // return `url('${this.slides[this.currentIndex].url}')`;
  return this.slides[this.currentIndex].url;
}

getCurrentSlideLabel() {
  return this.slides[this.currentIndex].title;
  }
  getCurrentSlideDescription(){
    return this.slides[this.currentIndex].description;
  }

  buttonEnable(): any {
return this.slides[this.currentIndex].buttonEnable;
}
}
