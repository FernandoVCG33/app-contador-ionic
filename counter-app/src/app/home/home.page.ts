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
  private readonly key_number:string= "ddr_key_number" ;
  constructor() {
    addIcons({
      chevronUpOutline,
      chevronDownOutline
    })
  }

  async ionViewWillEnter(){
    console.log("ionViewWillEnter");
    const conterPreferences = await Preferences.get({ key: this.key_number });
    if(conterPreferences.value){
      const num= +conterPreferences.value;
      if(isNaN(num) || num<0 || num>10 ){
        this.num=0;
        this.saveNum();
      }else{
        this.num=num;
      }
    }
  }

  up(){
    this.num++;
    this.saveNum();
    console.log(this.num);
  }
  down(){
    if (this.num != 0){
      this.num--;
      this.saveNum();
      console.log(this.num);
    }
    else{
      this.num=0;
    }
  }
  saveNum(){
    Preferences.set({key: this.key_number, value: this.num.toString()});
  }
}
