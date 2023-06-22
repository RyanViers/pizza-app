import { CognitoService } from './../cognito.service';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import { RouterModule, Router } from '@angular/router';
import Swal, { SweetAlertOptions } from 'sweetalert2';

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
  ],
  providers: [SignUpService, FormBuilder],
  templateUrl: './sign-up.component.html',
  styles: [],
})
export class SignUpComponent implements OnInit, OnDestroy {
  @ViewChild('verificationCode') verificationCode: ElementRef | undefined;
  isConfirm = false;

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

  private personalSub = new Subscription();

  /**
   * constructor
   * @param signUp
   * @param builder
   */
  constructor(
    private signUp: SignUpService,
    private builder: FormBuilder,
    private cognitoService: CognitoService,
    private router: Router
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
          this.isConfirm = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  public confirmSignUp(): void {
    let code = this.verificationCode?.nativeElement.value;
    if (this.fgPersonal.valid) {
      this.cognitoService
        .confirmSignUp(this.fgPersonal.value.email, code)
        .then((data) => {
          console.log(data);
          this.isConfirm = false;
          Swal.fire({
            ...this.swalOptions,
          });
          this.router.navigate(['/sign-in']);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  public readonly swalOptions: SweetAlertOptions = {
    title: 'User Confirmed. Please Sign In.',
    icon: 'success',
    target: document.body,
    heightAuto: false,
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    cancelButtonColor: '#d33',
    customClass: {
      popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
    },
  };
}
