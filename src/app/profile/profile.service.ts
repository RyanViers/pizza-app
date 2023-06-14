import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  public currentAuthenticatedUser(): Promise<any> {
    return Auth.currentAuthenticatedUser();
  }
}
