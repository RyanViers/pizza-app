import { Injectable, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SignUpForm } from './helpers/models';
import { Country } from './helpers/enums';

@Injectable()
export class SignUpService {
  public $signUp: WritableSignal<SignUpForm> = signal<SignUpForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: Country.USA,
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  constructor() {}

  /**
   * set sign up form
   * @param options
   */
  setSignUpForm(options: Partial<SignUpForm>) {
    const signUpForm = this.$signUp();
    this.$signUp.set({
      ...signUpForm,
      ...options,
    });
  }
}
