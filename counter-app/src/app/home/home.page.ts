import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {chevronDownOutline, chevronUpOutline} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent, IonButton, IonFooter, IonIcon],
})
export class HomePage {
  num:number=0;
  constructor() {
    addIcons({
      chevronUpOutline,
      chevronDownOutline
    })
  }
  up(){
    this.num++;
  }
  down(){
    this.num--;
  }
}
