import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {


	constructor(public navCtrl: NavController) {

	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

	materi(){
			this.navCtrl.push("MainPage");
	}

	quiz(){
			this.navCtrl.push("QuizselectPage");
	}

	about(){
			this.navCtrl.push("AboutPage");
	}
}
