import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import * as Splitting from 'splitting';


@Directive({
  selector: '[appSplitting]'
})
export class SplittingDirective implements AfterViewInit{

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    console.log('Directive initialized');
  console.log('Element text before splitting:', this.el.nativeElement.textContent);
  
  Splitting({ target: this.el.nativeElement });
  console.log('Element text after splitting:', this.el.nativeElement.textContent);
  }
}
