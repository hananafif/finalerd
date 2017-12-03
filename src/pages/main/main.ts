import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public babs : any;
  //public data : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    // this.data = {};
    // this.data.username = '';
    // this.data.response = '';

    // this.http = http;
  }

  materi1(babId,babTitle){

  let data = {
  id:babId,
  title:babTitle
  }
  this.navCtrl.push('Materi1Page',data);
  }

  ionViewWillEnter() {
    this.babsLoad();
  }

  babsLoad(){
  this.http.get('https://www.luky.duniaarloji.com/bab/bab.php')
  .map(res => res.json())
  .subscribe(data=> {
    this.babs = data;
    });
  }

  }