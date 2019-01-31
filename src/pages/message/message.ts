import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as enums from '../../enums/enum';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  myIP = enums.APIURL.URL;

  messageArray = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadDataMessage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }


  loadDataMessage() {
    let url = this.myIP + '/data/getAllMessageData.php';
    this.http.get(url).subscribe(
      (data: any) => {
  
        this.messageArray = data.message;
        console.log(this.messageArray);
      }
      , (error) => { console.log(error); }
    );
  }

}
