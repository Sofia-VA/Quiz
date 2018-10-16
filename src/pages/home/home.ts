import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { SmartphonePage } from '../smartphone/smartphone';
import { TvPage } from '../tv/tv';
import { LampPage } from '../lamp/lamp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //volumen-down
  bocina=BocinaPage;
  smart=SmartphonePage;
  tv=TvPage;
  lamp=LampPage;

  constructor(public navCtrl: NavController) {

  }

  Bclick()
  {
    this.navCtrl.push(this.bocina);
  }
  Sclick()
  {
    this.navCtrl.push(this.smart);
  }
  Tclick()
  {
    this.navCtrl.push(this.tv);
  }
  Lclick()
  {
    this.navCtrl.push(this.lamp);
  }

}
