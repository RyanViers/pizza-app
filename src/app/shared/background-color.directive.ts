import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor() { }

}
