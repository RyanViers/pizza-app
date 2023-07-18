import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  $menuToggle: WritableSignal<boolean> = signal(false);
  constructor() {}
}
