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

  public changePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<any> {
    return Auth.currentAuthenticatedUser().then((user) => {
      return Auth.changePassword(user, oldPassword, newPassword);
    });
  }

  public deleteUser() {
    return Auth.deleteUser();
  }
}
