import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { CognitoService } from '../cognito.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  styles: [``],
  template: `<div
    class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="w-auto h-10 mx-auto" src="assets/icon/favicon.png" />
      <h2
        class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-white"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-white"
            >Email address</label
          >
          <div class="mt-2">
            <input
              #email
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-white"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-400 hover:text-indigo-300"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              #password
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            (click)="check($event)"
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-sm text-center text-gray-400">
        Not a member?
        <a
          [routerLink]="['/sign-up']"
          class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
          >Sign Up Today</a
        >
      </p>
    </div>
  </div>`,
})
export default class SignInComponent implements OnInit {
  @ViewChild('email') email: ElementRef | undefined;
  @ViewChild('password') password: ElementRef | undefined;

  constructor(private cognitoService: CognitoService, private router: Router) {}

  ngOnInit() {}

  check(event: Event): void {
    event?.preventDefault();
    if (this.email && this.password) {
      this.cognitoService
        .signIn(
          this.email.nativeElement.value,
          this.password.nativeElement.value
        )
        .then((data) => {
          this.router.navigate(['/home']);
        })
        .catch((err) => {
          Swal.fire({
            ...this.swalOptions,
          });
        });
    }
  }

  public readonly swalOptions: SweetAlertOptions = {
    title: 'User Does Not Exist. Please Sign Up.',
    icon: 'info',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    target: document.body,
    heightAuto: false,
    customClass: {
      popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
    },
  };
}
