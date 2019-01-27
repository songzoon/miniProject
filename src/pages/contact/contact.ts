import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertCmp, AlertController, Alert } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [
    {name: 'Aran', telephone: '0950979240', imageUrl: 'assets/imgs/aran.jpg' }
  ];

  //อาเรย์ของออปเจค
  contactArray = [
    {name: 'Aran', telephone: '0950979240', imageUrl: 'assets/imgs/aran.jpg' }
    ,{name: 'Song', telephone: '0950159034', imageUrl: 'assets/imgs/song.jpg' }
    ,{name: 'Adinan', telephone: '0980596914', imageUrl: 'assets/imgs/adinan.jpg' }
    ,{name: 'Pepsi', telephone: '0626985509', imageUrl: 'assets/imgs/pepsi.jpg' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mysms: SMS) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  viewDetail(item){
    //this.navCtrl.push("PhoneBookDetailPage", item);
  }

  call(name,tel){
    var r = confirm("ต้องการที่จะโทรหา "+name+ ' หรือไม่');
    if (r == true) {
        window.open('tel:'+tel);
    } 
    
  }

  sms(name,tel){
    var r = confirm("ต้องการที่จะส่งข้อความหา "+name+ ' หรือไม่');
    if (r == true) {
        this.mysms.send(tel,'โทรกลับด่วน')
    } 
    
  }
  
  

  getItems(event){


    const val = event.target.value;

    if (val && val.trim() == '') {
      this.items = this.items.filter((item) => {
        return ;
      })
    // search 
    }
  }


}
