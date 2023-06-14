import { ProfileService } from './../../../profile.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { set } from 'lodash';
import { SharedModule } from 'src/app/shared/shared.module';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-delete-account',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  template: `<div
    class="grid grid-cols-1 px-4 py-16 max-w-7xl gap-x-8 gap-y-10 sm:px-6 md:grid-cols-3 lg:px-8"
  >
    <div>
      <h2 class="text-base font-semibold leading-7 text-white">
        Delete account
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-400">
        No longer want to use our service? You can delete your account here.
        This action is not reversible. All information related to this account
        will be deleted permanently.
      </p>
    </div>

    <form class="flex items-start md:col-span-2">
      <button
        (click)="deleteAccount()"
        type="submit"
        class="px-3 py-2 text-sm font-semibold text-white bg-red-500 rounded-md shadow-sm hover:bg-red-400"
      >
        Yes, delete my account
      </button>
    </form>
  </div>`,
  styles: [],
})
export class DeleteAccountComponent implements OnInit {
  constructor(private profile: ProfileService, private router: Router) {}

  ngOnInit() {}

  deleteAccount() {
    this.profile.deleteUser();
    Swal.fire({
      ...this.swalOptions,
      title: 'Account deleted',
      text: 'Your account has been deleted successfully.',
      icon: 'success',
      target: document.body,
      heightAuto: false,
    });
    this.router.navigate(['/']);
  }

  public readonly swalOptions: SweetAlertOptions = {
    title: '',
    icon: 'info',
    showCancelButton: false,
    confirmButtonText: 'Sign In',
    confirmButtonColor: '#3085d6',

    customClass: {
      popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
    },
  };
}
