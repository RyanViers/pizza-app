import { Directive, ElementRef } from '@angular/core';
//import * as Splitting from 'splitting';

@Directive({
  selector: '[appSplitting]',
})
export class SplittingDirective {
  constructor(private el: ElementRef) {}
}
