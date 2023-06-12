import { CognitoService } from './../cognito.service';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SignUpService } from './sign-up.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignUpForm } from './helpers/models';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { SweetAlertOptions } from 'sweetalert2';
import { NotificationsSettingsComponent } from './notifications-settings/notifications-settings/notifications-settings.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    NotificationsSettingsComponent,
  ],
  providers: [SignUpService, FormBuilder],
  templateUrl: './sign-up.component.html',
  styles: [],
})
export class SignUpComponent implements OnInit, OnDestroy {
  isConfirm = true;

  //PROFILE INFORMATION
  fgProfile: FormGroup = this.builder.group({});

  //PERSONAL INFORMATION
  fgPersonal: FormGroup = this.builder.group({
    firstName: ['', [Validators.required, Validators.maxLength(60)]],
    lastName: ['', [Validators.required, Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    country: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.maxLength(60)]],
    city: ['', [Validators.required, Validators.maxLength(60)]],
    state: ['', [Validators.required, Validators.maxLength(60)]],
    zip: ['', [Validators.required, Validators.pattern(new RegExp(/^\d{5}$/))]],
  });

  //NOTIFICATION PREFERENCES
  fgNotification: FormGroup = this.builder.group({});

  private personalSub = new Subscription();

  /**
   * constructor
   * @param signUp
   * @param builder
   */
  constructor(
    private signUp: SignUpService,
    private builder: FormBuilder,
    private cognitoService: CognitoService
  ) {}

  ngOnInit(): void {
    this.personalSub = this.fgPersonal.valueChanges.subscribe(() => {
      this.savePersonalState();
    });
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
  private savePersonalState(): void {
    const form: SignUpForm = {
      firstName: this.fgPersonal.value.firstName,
      lastName: this.fgPersonal.value.lastName,
      email: this.fgPersonal.value.email,
      password: this.fgPersonal.value.password,
      country: this.fgPersonal.value.country,
      address: this.fgPersonal.value.address,
      city: this.fgPersonal.value.city,
      state: this.fgPersonal.value.state,
      zip: this.fgPersonal.value.zip,
    };
    this.signUp.setSignUpForm(form);
  }

  public signUpWithCognito(): void {
    if (this.fgPersonal.valid) {
      this.cognitoService
        .signUp(this.fgPersonal.value)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  public readonly swalOptions: SweetAlertOptions = {
    title: '',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Add to Cart',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    customClass: {
      popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
    },
  };
}
