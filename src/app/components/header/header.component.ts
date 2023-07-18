import { HeaderService } from './header.service';
import { HeaderMobileComponent } from './components/header-mobile.component';
import { HeaderBottomComponent } from './components/header-bottom.component';
import { HeaderTopComponent } from './components/header-top.component';
import { IconsService } from './../../utils/icons.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { opacityScale } from 'src/app/utils/animations';

@Component({
  selector: 'app-header',
  styles: [],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderMobileComponent,
  ],
  animations: [opacityScale],
  template: `
    <header class="bg-light-shade relative ">
      <div
        class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8"
      >
        <app-header-top></app-header-top>

        <app-header-bottom></app-header-bottom>
      </div>

      <app-header-mobile *ngIf="$menuToggle()"></app-header-mobile>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  $menuToggle: Signal<boolean> = this.header.$menuToggle;

  constructor(private icons: IconsService, private header: HeaderService) {}

  ngOnInit() {}

  getIcon(num: number) {
    return this.icons.getIcon(num);
  }
}
