import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SignUpForm } from './helpers/models';
import { Country } from './helpers/enums';

@Injectable()
export class SignUpService {
  public $signUp = new BehaviorSubject<SignUpForm>({
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
    const signUpForm = this.$signUp.value;
    this.$signUp.next({
      ...signUpForm,
      ...options,
    });
  }
}
