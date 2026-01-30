import { Component } from '@angular/core';
import {IonHeader, IonContent, IonButton, IonFooter, IonIcon} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {chevronDownOutline, chevronUpOutline} from "ionicons/icons";
import {Preferences} from "@capacitor/preferences";

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

  async ionViewWillEnter(){
    console.log("ionViewWillEnter");
    const { value } = await Preferences.get({ key: 'name' });
  }

  up(){
    this.num++;
  }
  down(){
    if (this.num != 0){
      this.num--;
    }
    else{
      this.num=0;
    }

  }
}
