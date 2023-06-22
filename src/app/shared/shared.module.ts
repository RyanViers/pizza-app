import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundColorDirective } from './background-color.directive';
import { SplittingDirective } from './splitting.directive';



@NgModule({
  declarations: [BackgroundColorDirective, SplittingDirective],
  imports: [
    CommonModule
  ],
  exports: [BackgroundColorDirective, SplittingDirective]
})
export class SharedModule { }
