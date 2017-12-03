import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-materi1',
  templateUrl: 'materi1.html',
})
export class Materi1Page {

  public idbab : any;
  public babTitle : any;

  public babContents :any;
   
   constructor(public navCtrl: NavController,
   public navParams: NavParams, public http : Http)
   {
    //this.data = {};
    //this.data.username = '';
    //this.data.response = '';

    //this.http = http;
   }

   ionViewDidLoad() {
   this.idbab = this.navParams.get('id');
    this.babTitle = this.navParams.get('title');
    this.babContentLoad();
   }
  
  babContentLoad(){
  this.http.get('https://www.luky.duniaarloji.com/bab/content.php?id='+ this.navParams.get('id'))
    .map(res => res.json())
    .subscribe(data=> {
      this.babContents = data;
      // console.log(data);
    });
  }
}
