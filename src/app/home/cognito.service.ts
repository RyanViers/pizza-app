import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  constructor() {}

  public signUp(user: any): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        email: user.email,
        given_name: user.firstName,
        family_name: user.lastName,
      },
    });
  }

  public confirmSignUp(email: string, code: string): Promise<any> {
    return Auth.confirmSignUp(email, code);
  }

  getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public signIn(email: string, password: string): Promise<any> {
    return Auth.signIn(email, password);
  }

  public signOut(): Promise<any> {
    return Auth.signOut();
  }

  public forgotPassword(email: string): Promise<any> {
    return Auth.forgotPassword(email);
  }

  public currentAuthenticatedUser(): Promise<any> {
    return Auth.currentAuthenticatedUser();
  }

  public async refreshSession(): Promise<any> {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return await Auth.userSession(user);
    } catch (err) {
      return console.log(err);
    }
  }

  public forgotPasswordSubmit(
    email: string,
    code: string,
    password: string
  ): Promise<any> {
    return Auth.forgotPasswordSubmit(email, code, password);
  }
}
