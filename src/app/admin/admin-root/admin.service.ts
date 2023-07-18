import { Injectable,  signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  public $toggleSignal = signal(false);

  constructor() {}
}
