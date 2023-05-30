import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { stores, Store } from '../../utils/models/stores';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styles: [],
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
})
export class StoreListComponent implements OnInit {
  stores: Store[] = stores;
  constructor() {}

  ngOnInit() {}
}
