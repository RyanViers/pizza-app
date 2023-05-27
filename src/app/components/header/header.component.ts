import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, SharedModule],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
