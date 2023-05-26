import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import Splitting from 'splitting';

@Directive({
  selector: '[appSplitting]',
})
export class SplittingDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    console.log(this.el.nativeElement);
    this.el.nativeElement.classList.add('splitting');
    setTimeout(() => {
      Splitting({ target: this.el.nativeElement });
    });
  }
}
