import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
    standalone: true,
    imports: [CommonModule, IonicModule],
    providers: [],
    template: `<ion-label>Veggie Works</ion-label>`,
    styles: []
})
export class VeggieComponent {
    
    constructor() {}
}