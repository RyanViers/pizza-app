import { FooterComponent } from './../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  template: ` <ion-header>
      <app-header></app-header>
    </ion-header>

    <ion-content>
      <section
        class="h-full w-full bg-center bg-no-repeat bg-[url('src/assets/volcano.png')] bg-gray-700 bg-blend-multiply"
      >
        <div class="max-w-screen-xl px-4 py-24 mx-auto text-center">
          <h1
            appSplitting
            class="mb-4 mt-[22rem] text-6xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Big Daddy's Bayou Pizza
          </h1>
          <p
            appSplitting
            class="mb-8 text-xl font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          >
            "Grab a Slice of Swampy Paradise!"
          </p>
        </div>
      </section>
      <ion-footer>
        <app-footer></app-footer>
      </ion-footer>
    </ion-content>`,
  styles: [``],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class HomePage {
  constructor() {}
}
