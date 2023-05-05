import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SignUpForm } from "./models";
import { Country } from "./enums";

@Injectable()
export class SignUpService {

    public $signUp = new BehaviorSubject<SignUpForm>({
        firstName: "",
        lastName: "",
        email: "",
        country: Country.USA,
        streetAddress: "",
        city: "",
        state: "",
        zipCode: ""
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
            ...options
        });
    }
}