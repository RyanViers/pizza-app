import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { SignUpService } from "./helpers/sign-up.service";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { SignUpForm } from "./helpers/models";
import { Subscription } from 'rxjs';

@Component({
    standalone: true,
    imports: [
        CommonModule, 
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [SignUpService, FormBuilder],
    templateUrl: "./sign-up.component.html",
    styles: []
})
export class SignUpComponent implements OnInit, OnDestroy {

    //PROFILE INFORMATION
    fgProfile: FormGroup = this.builder.group({});

    //PERSONAL INFORMATION
    fgPersonal: FormGroup = this.builder.group({
        firstName: ["", [Validators.required, Validators.maxLength(60)]],
        lastName: ["", [Validators.required, Validators.maxLength(60)]],
        email: ["", [Validators.required, Validators.email]],
        country: ["", [Validators.required]],
        address: ["", [Validators.required, Validators.maxLength(60)]],
        city: ["", [Validators.required, Validators.maxLength(60)]],
        state: ["", [Validators.required, Validators.maxLength(60)]],
        zip: ["", [Validators.required, Validators.pattern(new RegExp(/^\d{5}$/))]]
    });

    //NOTIFICATION PREFERENCES
    fgNotification: FormGroup = this.builder.group({});

    private personalSub = new Subscription();

    /**
     * constructor
     * @param signUp 
     * @param builder 
     */
    constructor(private signUp: SignUpService,
                private builder: FormBuilder) {}

    ngOnInit(): void {
        this.personalSub = this.fgPersonal.valueChanges.subscribe(() => {this.savePersonalState()});
    }

    ngOnDestroy(): void {
        this.personalSub.unsubscribe();
    }

    /**
     * save personal info
     */
    savePersonal() {
        console.log(this.signUp.$signUp.value);
    }

    /**
     * save personal state
     */
    private savePersonalState() {
        const form: SignUpForm = {
            firstName: this.fgPersonal.value.firstName,
            lastName: this.fgPersonal.value.lastName,
            email: this.fgPersonal.value.email,
            country: this.fgPersonal.value.country,
            streetAddress: this.fgPersonal.value.address,
            city: this.fgPersonal.value.city,
            state: this.fgPersonal.value.state,
            zipCode: this.fgPersonal.value.zip
        };
        this.signUp.setSignUpForm(form);
    }
}