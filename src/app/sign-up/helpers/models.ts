import { Country } from "./enums";

export interface SignUpForm {
    firstName: string;
    lastName: string;
    email: string;
    country: Country;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
}