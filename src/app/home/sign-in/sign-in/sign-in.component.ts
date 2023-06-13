import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { CognitoService } from '../../cognito.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styles: [``],
})
export class SignInComponent implements OnInit {
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
          console.log(data);
          this.router.navigate(['/home']);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            ...this.swalOptions,
            target: document.body,
            heightAuto: false,
          });
        });
    }
  }

  public readonly swalOptions: SweetAlertOptions = {
    title: 'User Does Not Exist. Please Sign Up.',
    icon: 'info',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    customClass: {
      popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
    },
  };
}
