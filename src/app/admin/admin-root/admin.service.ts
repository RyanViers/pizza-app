import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  //Create a an rxjs subject to store the toggle state
  public $toggleState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  //Create a method to set the toggle state
  public setToggleState(state: boolean): void {
    this.$toggleState.next(state);
  }

  constructor() {}
}
